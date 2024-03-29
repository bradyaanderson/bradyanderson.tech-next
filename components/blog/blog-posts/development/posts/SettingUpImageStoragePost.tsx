import Paragraph from "../../../../general/Paragraph";
import Figure from "../../../../general/Figure";
import ExternalLink from "../../../../general/ExternalLink";

function SettingUpImageStoragePost() {
  return (
    <div>
      <Paragraph>
        I want to post a lot of images on this blog, but my current setup won't
        make that easy. Right now, I'm storing all images in my Git repository.
        While this makes things extremely simple, it won't be great long-term.
        This is why I've chosen to move all blog images to Amazon S3 storage.
      </Paragraph>
      <hr />
      <Paragraph>
        I'll be using Amazon S3 storage to store images from now on. Set up was
        extremely simple:
        <ol>
          <li>
            I created a new Amazon S3 bucket.
            <ul>
              <li>
                Amazon provides some great{" "}
                <ExternalLink link="https://docs.aws.amazon.com/s3/index.html">
                  documentation
                </ExternalLink>{" "}
                on how to do this.
              </li>
            </ul>
          </li>
          <li>
            I opened my bucket and started to create a directory structure
            exactly like the public directory that used to house blog images in
            my Git repo.
          </li>
          <li>
            I uploaded all from my blog into their respective place in the S3
            bucket.
          </li>
          <ul>
            <li>
              While uploading images, I needed to grant public read access to
              images so that anyone could view them.
            </li>
          </ul>
        </ol>
      </Paragraph>
      <Figure
        path="/blog/categories/development/posts/setting-up-image-storage/public-permission.png"
        width={512}
        height={379}
        caption="'Grant public-read access' is set so anyone can view."
      />
      <Paragraph>
        Now that S3 storage was set up, the last thing I needed to do was update
        the `src` attribute on all of my image elements to point to the URL of
        the image in Amazon S3. So I created a{" "}
        <ExternalLink link="https://github.com/bradyaanderson/bradyanderson.tech-next/blob/4b05c24a195c458818f4baed8974f9321fd43d65/src/common/BlogImage.tsx">
          Blog Image
        </ExternalLink>{" "}
        React component that will allow me to simply pass the path to the image
        in the S3 bucket and it will take care of all the styling.
      </Paragraph>
      <hr />
      <Paragraph>
        Image storage and easy image display, in my opinion, are crucial to
        being able to create blog posts. I'm excited this is finally complete,
        and I can move on to non-website-related blog posts! So check back soon
        for some posts on a Macintosh SE/30 that I recently picked up. I'm
        pretty excited to share what I've learned.
      </Paragraph>
    </div>
  );
}

export default SettingUpImageStoragePost;
