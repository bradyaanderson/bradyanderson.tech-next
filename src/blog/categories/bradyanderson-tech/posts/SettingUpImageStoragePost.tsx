import BlogPost from "../../../../common/BlogPost";
import BlogImage from "../../../../common/BlogImage";

function SettingUpImageStoragePost() {
  return (
    <BlogPost title="Setting up Amazon S3 Image Storage" date="08/03/2021">
      <pre>
        I want to post a lot of images on this blog, but my current setup won't
        make that easy. Right now, I'm storing all images in my Git repository.
        While this makes things extremely simple, it won't be great long-term.
        This is why I've chosen to move all blog images to Amazon S3 storage.
      </pre>
      <hr />
      <pre>
        I'll be using Amazon S3 storage to store images from now on. Set up was
        extremely simple:
        <ol>
          <li>
            I created a new Amazon S3 bucket.
            <ul>
              <li>
                Amazon provides some great{" "}
                <a
                  href="https://docs.aws.amazon.com/s3/index.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  documentation
                </a>{" "}
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
      </pre>
      <BlogImage
        path="/blog/categories/bradyanderson-tech/posts/setting-up-image-storage/public-permission.png"
        maxWidth="32rem"
        caption="'Grant public-read access' is set so anyone can view."
      />
      <pre>
        Now that S3 storage was set up, the last thing I needed to do was update
        the `src` attribute on all of my image elements to point to the URL of
        the image in Amazon S3. So I created a{" "}
        <a
          href="https://github.com/bradyaanderson/bradyanderson.tech-next/blob/4b05c24a195c458818f4baed8974f9321fd43d65/src/common/BlogImage.tsx"
          target="_blank"
          rel="noreferrer"
        >
          Blog Image
        </a>{" "}
        React component that will allow me to simply pass the path to the image
        in the S3 bucket and it will take care of all the styling.
      </pre>
      <hr />
      <pre>
        Image storage and easy image display, in my opinion, are crucial to
        being able to create blog posts. I'm excited this is finally complete,
        and I can move on to non-website-related blog posts! So check back soon
        for some posts on a Macintosh SE/30 that I recently picked up. I'm
        pretty excited to share what I've learned.
      </pre>
    </BlogPost>
  );
}

export default SettingUpImageStoragePost;
