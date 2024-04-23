import json

with open("dataTemp.json", "r") as file1:
    data = json.load(file1)

with open("piclink.json", "r") as file2:
    links = json.load(file2)

found = False    

for row in data:
    orilink = (row["picture"]).split("/")
    for link in links:
        namelink = (link).split("/")
        if not found:
            if namelink[-1] == orilink[-1]:
                row["desktopPic"] = link
                found = True
    found = False
    
print(data[:5])

with open("data.json", "w") as file:
    json.dump(data, file, indent=4)
