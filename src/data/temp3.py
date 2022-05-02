import os
import json
import shutil


def get_unique_image_name(common_name, existing_image_names):
    image_name = "_".join(common_name.split(" ")).replace("'", "_").replace("-", "_")
    image_index = 1
    candidate_name = f"{image_name}_{image_index}.JPG"
    while candidate_name in existing_image_names:
        image_index += 1
        candidate_name = f"{image_name}_{image_index}.JPG"
    return candidate_name


with open("Plant_captions.rtf") as f:
    lines = f.readlines()

data = [{"chapterNumber": str(i + 1), "plants": []} for i in range(20)]
new_images_folder = "plant_images"
original_images_folder = os.path.join("/home/haraman/Downloads", "Website")

existing_image_names = []
while lines:
    lines.pop(0)
    chapter_line = lines.pop(0)
    chapter = chapter_line.split("\\\n")[0]
    common_line = lines.pop(0)
    common_name = common_line.split("\\\n")[0].replace("\\92'", "'")
    latin_line = lines.pop(0)
    latin_name = latin_line.split("\\\n")[0]
    if lines[0] != "\\\n":
        copyright_line = lines.pop(0)
        copyright_name = copyright_line.split("\\\n")[0]
    else:
        copyright_name = ""

    unique_image_name = get_unique_image_name(common_name, existing_image_names)
    existing_image_names.append(unique_image_name)
    original_image_name = "_".join(common_name.split(" ")).replace("'", "_").replace("-", "_") + ".JPG"
    original_image_path = os.path.join(original_images_folder, f"Chapter {chapter}", original_image_name)

    new_image_path = os.path.join(new_images_folder, unique_image_name)
    print(f"moving {original_image_path} to {new_image_path}")
    if not os.path.exists(new_image_path):
        shutil.copyfile(original_image_path, new_image_path)
    data[int(chapter) - 1]["plants"].append({
        "commonName": common_name,
        "latinName": latin_name,
        "imageName": unique_image_name,
        "relativeImagePath": f"./plant_images/{unique_image_name}",
        "copyrightName": copyright_name
    })

    # if lines[0] != "\\\n":
    #     break


with open("plant_metadata_new.json", "w") as f:
    json.dump(data, f)