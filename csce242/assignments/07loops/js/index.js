/* Draw Scene */
document.getElementById("btn-draw").onclick = () => {
    const cloudSect = document.getElementById("div-clouds");
    const treeSect = document.getElementById("div-trees");
    const headerSect = document.getElementById("scene-header");
    const nowDate = new Date();

    // Add sun or moon first
    if ( (nowDate.getHours() >= 18) || (nowDate.getHours() <= 6) ) {
        document.querySelector(":root").style.setProperty("--day-or-night", "#000")
        const moon = document.createElement("div");
        moon.classList.add("moon");

        headerSect.append(moon);
    } else {
        const sun = document.createElement("div");
        sun.classList.add("sun");

        headerSect.append(sun);
    }

    let leftAmnt = 0;
    // Now add trees and clouds
    for (let i = 0; i < 6; ++i) {
        // Left amount calculations
        leftAmnt += 10;

        // Tree logic
        const tree = document.createElement("div");
        tree.classList.add("tree");
        const trunk = document.createElement("div");
        trunk.classList.add("stem");
        const leaf1 = document.createElement("div");
        leaf1.classList.add("leaf1");
        const leaf2 = document.createElement("div");
        leaf2.classList.add("leaf2");
        const leaf3 = document.createElement("div");
        leaf3.classList.add("leaf3");

        tree.append(leaf1);
        tree.append(leaf2);
        tree.append(leaf3);
        tree.append(trunk);

        tree.style.setProperty("left", leftAmnt + "em");

        treeSect.append(tree);
        
        // Cloud logic
        const cloud = document.createElement("div");
        cloud.classList.add("cloud");

        cloud.style.setProperty("left", leftAmnt + "em");

        cloudSect.append(cloud);
    }
};
