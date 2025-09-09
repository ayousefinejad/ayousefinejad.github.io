---
layout: post
title: "Research in Image Background Editing and Generation"
categories: projects
cover-img: "/assets/img/posts/background/background_image.png"
tags: [license plate, logo, service]
---

I’m excited to introduce my new service: **License Plate Logo Replacer**!
This service allows you to customize and replace logos on car license plates, making them unique and personalized. Whether you want to add a custom badge, company logo, or any special design, I can help you create a professional look for your vehicle.


Here is an example of an original, unedited license plate image:  
![Real Image](/assets/img/posts/background/lifan.jpg)

---

## License Plate Logo Replacer:

Showcase your personalized license plate!  
Below is an example of a custom logo applied to a license plate:  
![Plate Logo](/assets/img/posts/background/plate.jpg)

To add custom logos to license plates, we first collected a dataset of 200 segmented plate images. We then fine-tuned a YOLO segmentation model to accurately detect and segment license plates in various conditions. For realistic results, we apply perspective transformations to seamlessly place your logo onto the plate, ensuring it matches the angle and lighting of the original image.

**output:**
![Plate Replacer](/assets/img/posts/background/plate_replacer.jpg)


[Train Yolo Segmentation Code](https://github.com/your-username/your-repo-name)

---

## Background Editing and Generation:

Transform your images with professional background editing.  
Here’s a sample from
![Background Studio](/assets/img/posts/background/background_studio.jpg)



find 4 points on the Studio
![Studio polygen](/assets/img/posts/background/studio_polygen.png)


find 4 points on the ground that car located in
![car polygen](/assets/img/posts/background/car_polygen.png)


Warp Studio Image
![Warp Studio Image](/assets/img/posts/background/warped_stage.png)

Using SAM 2 to extract car image
![Segmented car](/assets/img/posts/background/segmented_car.png)


Apply segmented car into warp background
![Background Replacer](/assets/img/posts/background/background_image.png)


[Set Background Code](https://github.com/your-username/your-repo-name)

Let’s make your license plate stand out!


