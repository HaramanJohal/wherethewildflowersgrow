import json


with open("Plant_captions.rtf") as f:
    lines = f.readlines()

data = [{"chapterNumber": str(i + 1), "plants": []} for i in range(20)]

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

    image_name = f'{"_".join(common_name.split(" "))}.JPG'.replace("'", "_").replace("-", "_")
    data[int(chapter) - 1]["plants"].append({
        "commonName": common_name,
        "latinName": latin_name,
        "imageName": image_name,
        "relativeImagePath": f"./plant_images/{image_name}",
        "copyrightName": copyright_name
    })

    # if lines[0] != "\\\n":
    #     break


with open("plant_metadata_new.json", "w") as f:
    json.dump(data, f)