import React from 'react';
import './photogallery.css';

// photo gallery component for homepage and other users' profiles (doesn't have delete button)
const PhotoGallery = ({ images }) => {
  return (
    <div class='photogallery'>
      <div className="col">
        {images.map((image, index) => {
          // console.log(image);
          // This is a check to see if data is hosted by CSCO or by external website, then append our root
          // if it's just a relative path within our backend
          var url = (image.url).includes('http') ? image.url : 'http://localhost:4000/' + image.url;

          // Loop through every even indexed image, as there are two columns
          if (index%2 == 0){
            return(
            // display image, caption, vibes in first column
            <>
              <img key={index} src={url} alt={`Photo ${index + 1} Source ${url}`} />
              <div class='image-text'>
                {image.caption !== "null" ? <p class='caption'> {image.caption} </p> : <></>}
                <div className='vibe-text'>

                  {(image.vibes !== null && image.vibes.length > 0) ? <p class='vibes'> {image.vibes[0]}</p> : <></>}
                  {(image.vibes !== null && image.vibes.length > 0) ? <p class='vibes'> {image.vibes[1]}</p> : <></>}
                  {(image.vibes !== null && image.vibes.length > 0) ? <p class='vibes'> {image.vibes[2]}</p> : <></>}

                </div>
                
              </div>
            </>
            )

          }
        })}
      </div>



      <div className="col">
        {images.map((image, index) => {
          var url = (image.url).includes('http') ? image.url : 'http://localhost:4000/' + image.url;
          if (index%2 != 0){
            // display image, caption, vibes in second column
            return(

              <>
                <img key={index} src={url} alt={`Photo ${index + 1} Source ${url}`} />
                <div class='image-text'>
                  {image.caption != "null" ? <p class='caption'> {image.caption} </p> : <></>}
                  <div className='vibe-text'>
  
                    {(image.vibes !== null && image.vibes.length > 0) ? <p class='vibes'> {image.vibes[0]}</p> : <></>}
                    {(image.vibes !== null && image.vibes.length > 0) ? <p class='vibes'> {image.vibes[1]}</p> : <></>}
                    {(image.vibes !== null && image.vibes.length > 0) ? <p class='vibes'> {image.vibes[2]}</p> : <></>}
  
                  </div>
                  
                </div>
              </>
              )
          }
        })}
      </div>
    </div>
  );
};

export default PhotoGallery;