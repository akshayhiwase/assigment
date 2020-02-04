

const videoList = [
    {
        id: "1",
        title: "Croissants | Flour and Stone",
        thumbnail: "https://i.vimeocdn.com/video/600595198_390x220.webp"
    },
    {
        id: "2",
        title: "Perfect Mashed Potatoes and Gravy",
        thumbnail: "https://i.vimeocdn.com/video/604150056_390x220.webp"
    },
    {
        id: "3",
        title: "The Heart of Soba",
        thumbnail: "https://i.vimeocdn.com/video/726986673_390x220.webp"
    },
    {
        id: "4",
        title: "Grilled Cheese 9 Ways",
        thumbnail: "https://i.vimeocdn.com/video/570486309_390x220.webp"
    },
    {
        id: "5",
        title: "Pineapple Cheesecake",
        thumbnail: "https://i.vimeocdn.com/video/602705517_390x220.webp"
    },
    {
        id: "6",
        title: "Lemony Chicken Noodle Soup",
        thumbnail: "https://i.vimeocdn.com/video/537261616_390x220.jpg"
    }

]

const mainContainer = document.getElementById("main-container")
const searchWrapper = document.getElementById("search-wrapper")
const searchBox = document.getElementById("search-box")
const sortDscending = document.getElementById("sort-ascending")
const sortDescending = document.getElementById("sort-descending")
const videoGrid = document.getElementById("video-card-grid")

const videoCardGrid = listItems => {
    listItems.map(list => {
        const videoCard = document.createElement("div")
        videoCard.className = "playlist-card"

        const cardImage = document.createElement("img")
        cardImage.src = list.thumbnail
        cardImage.className = "thumbnail"
        videoCard.appendChild(cardImage)

        const cardTitle = document.createElement("h3")
        cardTitle.className = "video-card-title"
        cardTitle.innerHTML = list.title
        videoCard.appendChild(cardTitle)
        videoGrid.appendChild(videoCard)
    })



}

videoCardGrid(videoList)

const listascending = () => {
    let sortedMenuData = videoList.sort((data1, data2) => {
        return data1.title - data2.title;
    });

    videoGrid.innerHTML = "";
    videoCardGrid(sortedMenuData);

}
const listdescending = () => {
    let sortedMenuData = videoList.sort((data1, data2) => {
        return data2.title - data1.title;
    });

    videoGrid.innerHTML = "";
    videoCardGrid(sortedMenuData);

}
const searchVideo = () => {
    const filterMenuData = videoList.filter(item => {
        const selected = searchBox.value;
        return item.title.toLowerCase().includes(selected);
    });
    videoGrid.innerHTML = "";
    videoCardGrid(filterMenuData);
}

console.log(videoGrid)