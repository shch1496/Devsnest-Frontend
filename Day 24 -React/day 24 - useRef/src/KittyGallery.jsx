import {useRef} from 'react'

function KittyGallery() {
  const galleryRef = useRef(null);
  const index = useRef(0);
  function showNextImage() {
     const imageList = galleryRef.current.querySelectorAll(".image");
     index.current = index.current + 1 >= imageList.length? 0 : index.current +1;
     imageList[index.current].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
     })
  }

  return (
    <div>
       <section>
          <h2>Kitty Gallery</h2>
          <button onClick={showNextImage}>Next</button>
          <ul ref={galleryRef} className="gallery">
            <li className="image">
                <img src="https://placekitten.com/g/200/300" alt="" />
            </li>
            <li className="image">
                <img src="https://placekitten.com/g/200/250" alt=""  />
            </li>
            <li className="image">
               <img src="https://placekitten.com/g/300/300" alt=""  />
            </li>
          </ul>
       </section>
    </div>
  )
}

export default KittyGallery