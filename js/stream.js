Pusher.logToConsole = true;

var pusher = new Pusher('27b036fc69f61835deb6', {
    cluster: 'ap2'
});

var channel = pusher.subscribe('my-channel');
channel.bind('my-event', function(data) {
    
    document.getElementById('title').innerHTML='Text : '+data.message.bird.caption
    document.getElementById('grid-one').innerHTML=' '
    document.getElementById('grid-two').innerHTML=' '
    
    
    var image=document.createElement('img')
    image.src=data.message.bird.img1.large;
    image.style.margin="10px"
    document.getElementById('grid-one').appendChild(image)

    image=document.createElement('img')
    image.src=data.message.bird.img2.large;
    image.style.margin="10px"
    document.getElementById('grid-one').appendChild(image)
   
    image=document.createElement('img')
    image.src=data.message.bird.img3.large;
    image.style.margin="10px"
    document.getElementById('grid-one').appendChild(image)

    image=document.createElement('img')
    image.src=data.message.bird.img4.large;
    image.style.margin="10px"
    document.getElementById('grid-two').appendChild(image)
    

    image=document.createElement('img')
    image.src=data.message.bird.img5.large;
    image.style.margin="10px"
    document.getElementById('grid-two').appendChild(image)
    

    image=document.createElement('img')
    image.src=data.message.bird.img6.large;
    image.style.margin="10px"
    document.getElementById('grid-two').appendChild(image)
    
    $('#loader').addClass('hide-loader')
});
