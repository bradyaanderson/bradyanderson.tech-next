void drawCenteredText(WindowPtr theWindow, StringPtr theString);

main() {
	// Holds the program window.
	WindowPtr theWindow;
	// Holds the window's rectangle.
	Rect windowRect;
	// Holds information about an event. Example: pressing the mouse down.
	EventRecord	eventRec;

	/*
	 * --Initialize QuickDraw --
	 * QuickDraw is the raster graphic system. It uses
	 * a structure known as the GraphPort. The GrafPort defines
	 * a coordinate system corresponding to pixels.
	 * thePort is a global variable that points to current GrafPort.
	 */
	InitGraf(&thePort);

	InitWindows(); // Initialize the Window Manager
	InitFonts(); // Initialize the Font Manager
	InitCursor(); // Set cursor to standard arrow and make visible

	FlushEvents(everyEvent, 0); // Empty the event queue of all events

	/*
	 * -- Creating a Rect --
	 * This is a helper function to set a Rect's coordinates.
	 * Here, the coordinates are specified globally. The top left-most
	 * pixel on the screen is (0,0). This creates a Rect with the
	 * top left corner 40 pixels to the right of the screen's left-most pixel
	 * and 40 pixels down from the top-most pixel. The left corner of
	 * the rect is 140 to the right and 140 down.
	 */
	SetRect(&windowRect, 40, 40, 140, 140);

	/*
	 * -- Create a new window --
	 * The parameters are as followed:
	 * 0: wStorage - pointer where to store window record; null pointer
	 *    in this case.
	 * 1: boundsRect - The Rect to determine size and location; set above
	 * 2: title - The window's title.
	 * 3: visible - whether the window is visible.
	 * 4: procID - The window definition ID. An integer that corresponds
	 *    to what the window will look like; dBoxProb (1) is an alert or
	 *    modal dialog box.
	 * 5: behind - Where the window will appear in relation to others; -1
	 *    means the window will appear in front of other. NULL would put it
	 *    behind all others.
	 * 6: goAwayFlag - Whether the Window has the go away (minimize) toggle;
	 *    not applicable for alert style window.
	 * 7: refCon - The window's reference value; null pointer in this case.
	 */
	if (theWindow = NewWindow(0L, &windowRect, "\p",
					true, dBoxProc, (WindowPtr) -1L, false, 0L))
	{
		// Assign the current GrafPort to the window that was just created.
		SetPort(theWindow);

		TextFont(1); // Set font to application font (Geneva).
		TextSize(16); // Set font size in pixels.
		TextFace(0); // Set Text Face to plain text.

		/*
		 * -- Draw Text (see function below) --
		 * Note: \p indicates that the string should be formatted
		 * as a Pascal string. The Mac's main language is Pascal and
		 * there are some small variations in C and Pascal strings,
		 * which is why this is necessary.
		 */
		drawCenteredText(theWindow, "\pHello, World!");

		// A quick (and probably dirty) way to wait until the mouse is
		// clicked before continuing.
		while(!GetNextEvent(mDownMask, &eventRec));

		// Get rid of the window that was created.
		DisposeWindow(theWindow);
	}
}

/*
 * Draw the text given in the center of the given window.
 * Note: pascalString should be formatted like a Pascal string, not
 * a C string.
 */
void drawCenteredText(WindowPtr theWindow, StringPtr pascalString) {
	// Get the window Rect.
	Rect windowRect = theWindow->portRect;

	/*
	 * -- Calculate the pen location --
	 * Calculate where the pen should go so that it's centered in
	 * the window. Point is a handy structure which can hold a horizontal
	 * and vertical value.
	 */
	Point penLocation;
	penLocation.h = (windowRect.left + windowRect.right) / 2;
	penLocation.v = (windowRect.top + windowRect.bottom) / 2;
	penLocation.h -= StringWidth(pascalString) / 2;

	/* -- Move the QuickDraw Pen --
	 * Moves the pen to the location on the window. Unlike the NewWindow
	 * function, this uses local coordinates. (0,0) would be the top left
	 * of the window, not the screen.
	 */
	MoveTo(penLocation.h, penLocation.v);

	// Draw string using font, size, and face set above
	DrawString(pascalString);
}