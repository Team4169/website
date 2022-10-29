from PIL import Image, ImageFilter

original = Image.open('src/team.jpg')
blured = original.filter(ImageFilter.GaussianBlur(10))
blured.save('src/teamblured.jpg')