const storiesContent = document.getElementsByClassName('stories')[0];
for (let index = 0; index < 5; index++) {
    const storyContainer = document.createElement("div");
    const storyContent = document.createElement("div");
    const storyHolder = document.createElement("div");
    const storyTitle = document.createElement('h2');
    const storyOwner = document.createElement('p');
    const dateContainer = document.createElement('p');
    const storyImage = document.createElement('img');
    const title = `Lorem Ipsum Standards`;
    const owner = `Alain Burindi Muhindo`;
    const content = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it to make ...`;
    const date = new Date('May '+ (index+1) +' 2015');
    storyContainer.classList += 'story';
    storyContent.classList += 'content';
    storyTitle.classList += 'title';
    storyOwner.classList += 'owner';
    dateContainer.classList += 'date';
    storyImage.classList += 'img';
    storyHolder.classList += 'holder';
    storyTitle.appendChild(document.createTextNode(title));
    storyOwner.appendChild(document.createTextNode(owner));
    storyContent.appendChild(document.createTextNode(content));
    dateContainer.appendChild(document.createTextNode(date));
    storyImage.src = "images/"+(index+1)+".jpg";
    storyContainer.appendChild(storyTitle);
    storyContainer.appendChild(storyContent);
    storyContainer.appendChild(storyOwner);
    storyContainer.appendChild(dateContainer);
    storyHolder.appendChild(storyContainer);
    storyHolder.appendChild(storyImage);
    storiesContent.appendChild(storyHolder);
}