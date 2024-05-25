import json

with open("processingJson.json", "r") as file1:
    data = json.load(file1)

# with open("piclink.json", "r") as file2:
#     links = json.load(file2)

# found = False    

# for row in data:
#     orilink = (row["picture"]).split("/")
#     for link in links:
#         namelink = (link).split("/")
#         if not found:
#             if namelink[-1] == orilink[-1]:
#                 row["desktopPic"] = link
#                 found = True
#     found = False
downloadProjectThumbnail = []
downloadstring1 = []

for row in data:
    row["designerThumbnail"] = "./assets/designerThumbnail/" + row["desktopImg"].split('/')[-1]
    row["projectThumbnail"] = "./assets/projectThumbnail/" + row["projectImgDesktop"].split('/')[-1]
    downloadProjectThumbnail.append(row["projectImgDesktop"] + "\n")
    downloadstring1.append(row["projectImgDesktop"] + "\n")
    downloadstring1.append(row["projectImgMobile"] + "\n")
    for section in row["project-section"]:
        for img in section["pictures"]:
            downloadstring1.append(img["img_link"] + "\n")

    
print(data[0])
# print(type(data))
# print(type(data[0]))

with open("processingData2.json", "w") as file:
    json.dump(data, file, indent=4)

with open("downloadProjectThumbnail.txt", "w") as file:
    file.writelines(downloadProjectThumbnail)

with open("downloadProjectImages.txt", "w") as file:
    file.writelines(downloadstring1)

