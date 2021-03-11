import { Component, Suspense, lazy} from 'react';
import { addStickyHeader } from '../../lib/helper';
import * as THREE from '../../lib/threejs/build/three.module.js';
import { GLTFLoader } from '../../lib/threejs/jsm/loaders/GLTFLoader.js';
import { getDeviceName } from '../../lib/helper';
import {useRouter} from 'next/router';
import $ from 'jquery'
const DigitalMarketingContent = lazy(() => import('./DigitalMarketingContent'));
let deviceName = getDeviceName();
let orientation = '';

let renderer,  circleScene, camera, idleAction,
idleAction2,  idleAction3, idleAction4;
var mixer, model, mixer2, model2, mixer3, model3, mixer4, model4;
let loadingAction, loadingAction2, loadingAction3, loadingAction4;
if (window.innerHeight > window.innerWidth) {
  orientation = 'potrait';
} else {
  orientation = 'landscape';
}

const DigitalMarketingSlide = (props) =>{
  const routers = useRouter()
  const {locale} = routers;
  return <DigitalMarketing {...props} language={locale}  />
}




 class DigitalMarketing extends Component {
  constructor() {
    super(); // ref for scrolling a div into view
    this.state = {
      scene: "",
      activeTab: 1,
      dartboard: {
        id: 'dartboard',
        url: 'images/slide-7-object-1.png',
        path: '/gltf/fold-6/dartboard/animation/gltf/',
        fileName: 'dart board (anim group transitions).gltf',
        className: 'digi-model-1',
        rotation: { x: 0, y: 4.8, z: 0 },
        scaling:
          deviceName === 'Desktop'
            ? { x: 23, y: 23, z: 23 }
            : deviceName === 'Mobile'
            ? orientation === 'potrait'
              ? { x: 16, y: 16, z: 16 }
              : { x: 17, y: 17, z: 17 }
            : window.innerHeight > 667
            ? { x: 21, y: 21, z: 21 }
            : { x: 28, y: 28, z: 28 },

        position:
          deviceName === 'Desktop'
            ? { x: 2.2, y: 2.5, z: 0 }
            : deviceName === 'Mobile'
            ? orientation === 'potrait'
              ? { x: 4.1, y: 3.3, z: 0 }
              : { x: 2.7, y: 2.5, z: 0 }
            : window.innerHeight > 667
            ? { x: 4, y: 3.2, z: 0 }
            : { x: 3.8, y: 3.5, z: 0 },

        circlePosition:
          deviceName === 'Desktop'
            ? { x: 2.4, y: 2.4, z: 0 }
            : deviceName === 'Mobile'
            ? orientation === 'potrait'
              ? { x: 3.7, y: 2.2, z: 0 }
              : { x: 2.8, y: 2.25, z: 0 }
            : window.innerHeight > 667
            ? { x: 4, y: 3, z: 0 }
            : { x: 3.8, y: 2.8, z: 0 },

        circleRadius:
          deviceName === 'Desktop'
            ? 0.7
            : deviceName === 'Tablet'
            ? orientation === 'potrait'
              ? 0.4
              : 0.6
            : window.innerHeight > 667
            ? 0.75
            : 0.9,

        signaturePosition:
          window.innerHeight > 667 ? { x: 4.2, y: 3, z: 0 } : { x: 3.8, y: 2.5, z: 0 },
        isBindSignature: true,
      },

      binocular: {
        id: 'binocular',
        url: 'images/slide-7-object-2.png',
        path: '/gltf/fold-6/binocular/animation/gltf/',
        fileName: 'binoculars (anim group transitions).gltf',
        className: 'digi-model-2',
        rotation: { x: 0, y: 4.8, z: 0 },
        scaling:
          deviceName === 'Desktop'
            ? { x: 17, y: 17, z: 17 }
            : deviceName === 'Mobile'
            ? orientation === 'potrait'
              ? { x: 15, y: 15, z: 15 }
              : { x: 13, y: 13, z: 13 }
            : window.innerHeight > 667
            ? { x: 21, y: 21, z: 21 }
            : { x: 25, y: 25, z: 25 },

        position:
          deviceName === 'Desktop'
            ? { x: 2.2, y: 0.5, z: 0 }
            : deviceName === 'Mobile'
            ? orientation === 'potrait'
              ? { x: 4.1, y: 0.9, z: 0 }
              : { x: 2.8, y: 0.7, z: 0 }
            : // window.innerHeight > 667 ? { x: 4, y: -0.3, z: 0 } : { x: 3.8, y: -0.4, z: 0 },
            window.innerHeight > 667
            ? { x: 4, y: -0.3, z: 0 }
            : window.innerHeight < 500
            ? { x: 3.8, y: 0.4, z: 0 }
            : { x: 3.8, y: 1, z: 0 },

        circlePosition:
          deviceName === 'Desktop'
            ? { x: 2.2, y: 0.2, z: 0 }
            : deviceName === 'Tablet'
            ? orientation === 'potrait'
              ? { x: 3.6, y: 0.6, z: 0 }
              : { x: 2.75, y: 0.3, z: 0 }
            : // window.innerHeight > 667 ? { x: 4, y: -0.6, z: 0 } : { x: 3.7, y: -0.6, z: 0 },
            window.innerHeight > 667
            ? { x: 4, y: -0.6, z: 0 }
            : window.innerHeight < 500
            ? { x: 3.7, y: 0.6, z: 0 }
            : { x: 3.8, y: -0.6, z: 0 },

        circleRadius:
          deviceName === 'Desktop'
            ? 0.7
            : deviceName === 'Tablet'
            ? orientation === 'potrait'
              ? 0.4
              : 0.55
            : window.innerHeight > 667
            ? 0.7
            : 0.87,
        isBindSignature: true,
      },

      rocket: {
        id: 'rocket',
        url: 'images/slide-7-object-3.png',
        path: '/gltf/fold-6/rocket/animation/gltf/',
        fileName: 'rocket (anim group transitions).gltf',
        className: 'digi-model-3',
        rotation: { x: 0, y: 4.0, z: 0 },
        scaling:
          deviceName === 'Desktop'
            ? { x: 20, y: 20, z: 20 }
            : deviceName === 'Mobile'
            ? orientation === 'potrait'
              ? { x: 14, y: 14, z: 14 }
              : { x: 15, y: 15, z: 15 }
            : window.innerHeight > 667
            ? { x: 20, y: 20, z: 20 }
            : { x: 24, y: 24, z: 24 },

        position:
          deviceName === 'Desktop'
            ? { x: 7.5, y: 2.2, z: 0 }
            : deviceName === 'Mobile'
            ? orientation === 'potrait'
              ? { x: 5.9, y: 3.3, z: 0 }
              : { x: 7.2, y: 2.2, z: 0 }
            : window.innerHeight > 667
            ? { x: 5.8, y: 2.9, z: 0 }
            : { x: 6.2, y: 3.2, z: 0 },

        circlePosition:
          deviceName === 'Desktop'
            ? { x: 7.6, y: 2.3, z: 0 }
            : deviceName === 'Tablet'
            ? orientation === 'potrait'
              ? { x: 6.4, y: 2.1, z: 0 }
              : { x: 7.3, y: 2.2, z: 0 }
            : window.innerHeight > 667
            ? { x: 5.8, y: 2.9, z: 0 }
            : { x: 6.2, y: 2.5, z: 0 },

        circleRadius:
          deviceName === 'Desktop'
            ? 0.7
            : deviceName === 'Tablet'
            ? orientation === 'potrait'
              ? 0.45
              : 0.6
            : window.innerHeight > 667
            ? 0.75
            : 0.9,
        isBindSignature: true,
      },

      like: {
        id: 'like',
        url: 'images/slide-7-object-4.png',
        path: '/gltf/fold-6/like/animation/gltf/',
        fileName: 'thumbsup (anim group transitions).gltf',
        className: 'digi-model-4',
        rotation: { x: 0, y: 4.8, z: 0 },
        scaling:
          deviceName === 'Desktop'
            ? { x: 20, y: 20, z: 20 }
            : deviceName === 'Mobile'
            ? orientation === 'potrait'
              ? { x: 16, y: 16, z: 16 }
              : { x: 15, y: 15, z: 15 }
            : window.innerHeight > 667
            ? { x: 23, y: 23, z: 23 }
            : { x: 26, y: 26, z: 26 },

        position:
          deviceName === 'Desktop'
            ? { x: 7.5, y: 0.4, z: 0 }
            : deviceName === 'Mobile'
            ? orientation === 'potrait'
              ? { x: 5.9, y: 0.9, z: 0 }
              : { x: 7.1, y: 0.7, z: 0 }
            : // window.innerHeight > 667 ? { x: 5.8, y: -0.4, z: 0 } : { x: 6.2, y: -0.5, z: 0 },
            window.innerHeight > 667
            ? { x: 5.8, y: -0.4, z: 0 }
            : window.innerHeight < 500
            ? { x: 6.2, y: 0.5, z: 0 }
            : { x: 6.2, y: -0.5, z: 0 },

        circlePosition:
          deviceName === 'Desktop'
            ? { x: 7.55, y: 0, z: 0 }
            : deviceName === 'Tablet'
            ? orientation === 'potrait'
              ? { x: 6.3, y: 0.6, z: 0 }
              : { x: 7.2, y: 0.4, z: 0 }
            : // window.innerHeight > 667 ? { x: 5.8, y: -0.6, z: 0 } : { x: 6.2, y: -0.6, z: 0 },
            window.innerHeight > 667
            ? { x: 5.8, y: -0.6, z: 0 }
            : window.innerHeight < 500
            ? { x: 6.2, y: 0.6, z: 0 }
            : { x: 6.2, y: -0.6, z: 0 },

        circleRadius:
          deviceName === 'Desktop'
            ? 0.7
            : deviceName === 'Tablet'
            ? orientation === 'potrait'
              ? 0.35
              : 0.45
            : window.innerHeight > 667
            ? 0.7
            : 0.8,

        signaturePosition:
          window.innerHeight > 667 ? { x: 6, y: -0.3, z: 0 } : { x: 6.2, y: -0.2, z: 0 },
          isBindSignature: true,
      },
    };
  }

  componentDidMount() {
    this.loadModel(this.state.dartboard);   
   
    console.log("THE DIGITAL MARKETING COMPONENT IS MOUNTED");
    let elem = document.getElementById('dartboard');
    if (elem && this.props.activeSlide === this.props.slideIds) {
    }
  }

  componentDidUpdate() {
    let elem = document.getElementById('dartboard');

    if(elem && this.props.activeSlide === this.props.slideId && elem.hasChildNodes()){
      this.playMarketingAnimation();
  }


    if (elem && this.props.activeSlide === this.props.slideId && !elem.hasChildNodes()) {
   //   this.loadModel(this.state.dartboard);
    }
  }


  sceneClear = () => {
    if(this.state.scene != ""){
      while(this.state.scene.children.length > 0){
        // console.log("Digital Marketing slide is clean");
        this.state.scene.remove(this.state.scene.children[0]);
      }
    }
  }



playMarketingAnimation = () => {
console.log("playing the markeing animation method");

if(loadingAction){
  loadingAction.reset();
  loadingAction.play();

}
if(loadingAction2){
  loadingAction2.reset();
  loadingAction2.play();
}
if(loadingAction3){
  loadingAction3.reset();
  loadingAction3.play();
}
if(loadingAction4){
  loadingAction4.reset();
  loadingAction4.play();  
}




}





  loadModel = async (obj) => {


 console.log("so we have loaded this")


    let mouse = new THREE.Vector2();
    let th = this;
    let container = document.getElementById(obj.id);
    let height = container.clientHeight;
    let width = container.clientWidth;
    let clock = new THREE.Clock();
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.setClearColor(0xffffff, 0);
    renderer.outputEncoding = THREE.sRGBEncoding;
    container.appendChild(renderer.domElement);
    th.state.scene = new THREE.Scene();
    circleScene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 2000);
    camera.position.set(5, 2, 8);
    let light2 = new THREE.PointLight(0xffffff, 2);
    light2.position.set(450, 100, 0);
    th.state.scene.add(light2);
    let light4 = new THREE.PointLight(0xffffff, 2);
    light4.position.set(-450, 300, 500);
    th.state.scene.add(light4);
    let raycaster = new THREE.Raycaster();
   // loading the darboard into the scene
    let gltf = await th.loadGLTFModel(this.state.dartboard.path, this.state.dartboard.fileName);
    model = gltf.scene;
    model.position.set(this.state.dartboard.position.x, this.state.dartboard.position.y, this.state.dartboard.position.z);
    model.scale.set(this.state.dartboard.scaling.x, this.state.dartboard.scaling.y, this.state.dartboard.scaling.z);
    model.rotation.x += this.state.dartboard.rotation.x;
    model.rotation.y += this.state.dartboard.rotation.y;
    model.rotation.z += this.state.dartboard.rotation.z;
    th.state.scene.add(model);
    mixer = new THREE.AnimationMixer(model);
    loadingAction = mixer.clipAction(gltf.animations[2]);
    idleAction = mixer.clipAction(gltf.animations[0]);
    loadingAction.setLoop(THREE.LoopOnce);
    loadingAction.clampWhenFinished = true;
    loadingAction.play();
    idleAction.play();



    // loading the binocular in the Scene

        let gltf2 = await th.loadGLTFModel(this.state.binocular.path, this.state.binocular.fileName);
        model2 = gltf2.scene;
        model2.position.set(this.state.binocular.position.x, this.state.binocular.position.y, this.state.binocular.position.z);
        model2.scale.set(this.state.binocular.scaling.x, this.state.binocular.scaling.y, this.state.binocular.scaling.z);
        model2.rotation.x += this.state.binocular.rotation.x;
        model2.rotation.y += this.state.binocular.rotation.y;
        model2.rotation.z += this.state.binocular.rotation.z;
        th.state.scene.add(model2);
        mixer2 = new THREE.AnimationMixer(model2);
        loadingAction2 = mixer2.clipAction(gltf2.animations[2]);
        idleAction2 = mixer2.clipAction(gltf2.animations[0]);
        loadingAction2.setLoop(THREE.LoopOnce);
        loadingAction2.clampWhenFinished = true;
        loadingAction2.play();
        idleAction2.play();


// loading the rocket in the Scene
        let gltf3 = await th.loadGLTFModel(this.state.rocket.path, this.state.rocket.fileName);
        model3 = gltf3.scene;
        model3.position.set(this.state.rocket.position.x, this.state.rocket.position.y, this.state.rocket.position.z);
        model3.scale.set(this.state.rocket.scaling.x, this.state.rocket.scaling.y, this.state.rocket.scaling.z);
        model3.rotation.x += this.state.rocket.rotation.x;
        model3.rotation.y += this.state.rocket.rotation.y;
        model3.rotation.z += this.state.rocket.rotation.z;
        th.state.scene.add(model3);
        mixer3 = new THREE.AnimationMixer(model3);
        loadingAction3 = mixer3.clipAction(gltf3.animations[2]);
        idleAction3 = mixer3.clipAction(gltf3.animations[0]);
        loadingAction3.setLoop(THREE.LoopOnce);
        loadingAction3.clampWhenFinished = true;
        loadingAction3.play();
        idleAction3.play();

// loading the like in the Scene
      let gltf4 = await th.loadGLTFModel(this.state.like.path, this.state.like.fileName);
      model4 = gltf4.scene;
      model4.position.set(this.state.like.position.x, this.state.like.position.y, this.state.like.position.z);
      model4.scale.set(this.state.like.scaling.x, this.state.like.scaling.y, this.state.like.scaling.z);
      model4.rotation.x += this.state.like.rotation.x;
      model4.rotation.y += this.state.like.rotation.y;
      model4.rotation.z += this.state.like.rotation.z;
      th.state.scene.add(model4);
      mixer4 = new THREE.AnimationMixer(model4);
      loadingAction4 = mixer4.clipAction(gltf4.animations[3]);
      idleAction4 = mixer4.clipAction(gltf4.animations[0]);
      loadingAction4.setLoop(THREE.LoopOnce);
      loadingAction4.clampWhenFinished = true;
      loadingAction4.play();
      idleAction4.play();



    if (obj.isBindSignature) {
      let signature = THREE.AnimationClip.findByName(gltf.animations, 'signature');
      let signatureAction = mixer.clipAction(signature);
      signatureAction.setLoop(THREE.LoopOnce);
      let signature2 = THREE.AnimationClip.findByName(gltf2.animations, 'signature');
      let signatureAction2 = mixer2.clipAction(signature2);
      signatureAction2.setLoop(THREE.LoopOnce);
      let signature3 = THREE.AnimationClip.findByName(gltf3.animations, 'signature');
      let signatureAction3 = mixer3.clipAction(signature3);
      signatureAction3.setLoop(THREE.LoopOnce);
      let signature4 = THREE.AnimationClip.findByName(gltf4.animations, 'signature');
      let signatureAction4 = mixer4.clipAction(signature4);
      signatureAction4.setLoop(THREE.LoopOnce);




      let playing = false;
      mixer.addEventListener('finished', function (e) {
        signatureAction.stop();
        idleAction.play();
      });
      mixer2.addEventListener('finished', function (e) {
        signatureAction2.stop();
        idleAction2.play();
      });
      mixer3.addEventListener('finished', function (e) {
        signatureAction3.stop();
        idleAction3.play();
      });
      mixer4.addEventListener('finished', function (e) {
        signatureAction4.stop();
        idleAction4.play();
      });

      function clicked(event, isClicked) {
    raycaster.setFromCamera(mouse, camera);
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    let intersects = raycaster.intersectObjects(th.state.scene.children, true);
        if (intersects.length > 0) {
        if(intersects[0].object.parent.name == 'board1111'){
           if(isClicked){ signatureAction.stop(); } 
            signatureAction2.stop();
            signatureAction3.stop();
            signatureAction4.stop();
            signatureAction.play();
          }
          else if(intersects[0].object.parent.name == 'rocket_group1'){
            signatureAction.stop();
            signatureAction2.stop();
            if(isClicked){
              signatureAction3.stop();
            }
            signatureAction4.stop();
            signatureAction3.play();
          }
          else if(intersects[0].object.parent.parent.name == 'binocular_group2'){
            signatureAction.stop();
            if(isClicked){
              signatureAction2.stop();
            }
            signatureAction3.stop();
            signatureAction4.stop();
            signatureAction2.play();
          }
          else if(intersects[0].object.parent.parent.name == 'like_group1'){
           if(isClicked){
            signatureAction4.stop();
           }
            signatureAction.stop();
            signatureAction2.stop();
            signatureAction3.stop();
            signatureAction4.play();

          }

        }

      }

   container = renderer.domElement;
      document.addEventListener('mousemove', function (event) {
        clicked(event, false);
        camera.updateMatrixWorld();
      });

    let deviceName = getDeviceName();
      document.addEventListener('click', function (event) {

        if (deviceName === 'Mobile') {
          clicked(event, true);
          camera.updateMatrixWorld();
        } else {
          clicked(event, true);
          camera.updateMatrixWorld();
        }
      });
    }

    animate();
    window.onresize = function () {
      height = container.clientHeight;
      width = container.clientWidth;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    function animate() {
    requestAnimationFrame(animate);
    let delta = clock.getDelta();
      if (th.props.activeSlide === th.props.slideId) {
        mixer.update(delta);
        mixer2.update(delta);
        mixer3.update(delta);
        mixer4.update(delta);

        if (th.state.activeTab === 3) {
          model.position.x += 0.02;
        }
        renderer.autoClear = true;
        renderer.render(th.state.scene, camera);
      }
    }
  };



  redirectToUrl = (url) => {
    this.props.history.push(url);
  };


  async loadGLTFModel(path, fileName) {
    return new Promise((res, rej) => {
      let loader = new GLTFLoader().setPath(path);
      loader.load(
        fileName,
        function (gltf) {
          res(gltf);
        },
        undefined,
        function (e) {
          console.error(e);
        }
      );
    });
  }


  formpopup = () => {
$('.formPopup ').css("display","block");
  }

  scrolldownmethod(targetdiv){
    var targetid = '#' + targetdiv;
    $(targetid)[0].scrollIntoView({
    behavior: 'smooth'
      });
  }

  // method to remove the left right arrow on scrolling
  removeSliderArrow = (element) => {
    let winheight = window.innerHeight; // get the height of the inner window
    let scrolledtop = element.target.scrollTop; // get the scrolled height of the element from the top;
    if(scrolledtop > winheight){ // compare if the scrolled of the element top distance is greater than the windhow height
    $('.slider-custom-arrow.next, .slider-custom-arrow.prev').css("display", "none");
    
    if(this.props.nextSlide){
      element.target.querySelector(".mobile-arrow-div-left img").style.display = 'none'; 
      element.target.querySelector(".mobile-arrow-div-right img").style.display = 'none'; 
    }

    }
    else{
        $('.slider-custom-arrow.next, .slider-custom-arrow.prev').css("display", "block");
      
   if(this.props.prevSlide){
    element.target.querySelector(".mobile-arrow-div-left img").style.display = 'block'; 
    element.target.querySelector(".mobile-arrow-div-right img").style.display = 'block'; 
   }   
       
    }
  }



  render() {
    return (
      <div onScroll = {this.removeSliderArrow} className=" slide-section toggleDetails scroll-down-trigger">
        <div
          className="contentSlideSection slide-content-wrapper p41 d-flex flex-column slidefour"
          id="content-wrapper4"
          onScroll={(event) => addStickyHeader(event.target)}>



{/* left arrow for mobile  */}

{ this.props.prevSlide 
? <a className = "mobile-arrow-div-left" onClick = {this.props.language === 'en-US' ? this.props.prevSlide: this.props.nextSlide}>
<img src = "/images/prev.png" alt = "prev arrow"/> 
</a>
 : ''
 }

      
{/* right arrow for mobile */}
{this.props.nextSlide 
?<a  className = "mobile-arrow-div-right" onClick = {this.props.language === 'en-US' ? this.props.nextSlide: this.props.prevSlide}>
<img src = "/images/next.png"  alt = "next arrow"/>
</a>
: ''
}
      <div className="mg-slide-content text-center flex-fill d-flex align-items-start align-items-md-center">
            <div className="container dt_container" id="container4">
              {/* <div className="waves"></div> */}
              <div className="mg-slide-info text-left m-auto" id="info4">
                <div className="showdetail box-direction">
                  <h5 className="mg-title-light fw-light"> 
                  {this.props.language === 'en-US'
                   ?<>{this.props.data.sliders[0].short_title}</>
                   :<>{this.props.data.sliders[0].short_title_arabic}</>}
                  
                  </h5>
                  <h1 className="mg-title"> 
                  {this.props.language === 'en-US'
                   ?<>{this.props.data.sliders[0].title}</>
                   :<>{this.props.data.sliders[0].title_arabic}</>}
                   </h1>
                  <p className="mg-p truncate-height mb-hide-description">
                  {this.props.language === 'en-US'
                   ?<>{this.props.data.sliders[0].description}</>
                   :<>{this.props.data.sliders[0].description_arabic}</>}
                  </p>
          
                      <button id = "scroll-up-btn"  className="btn theme-btn xs-hidden"
                        onClick = {() => this.scrolldownmethod('dm-targetdiv')}>
                        <img src="/images/scrollDown.png" alt = "scroll up" />
                        {this.props.language === 'en-US'
                      ? <>SCROLL UP</>
                      :<>انتقل إلى أعلى</>
                        }
                    </button>
                </div>
              </div>
               <Suspense fallback = "Loading...">
               <DigitalMarketingContent
                data = {this.props.data.sliders[0]}
                services = {this.props.data.services}
                books = {this.props.data.books}
               /> 
              </Suspense> 


            </div>

          </div>
        </div>

        <div className="slide-object-img-wrapper contact-img-wrapper" id="dartboard"></div>
        <div className="slide-object-img-wrapper contact-img-wrapper" id="binocular"></div>
        <div className="slide-object-img-wrapper contact-img-wrapper" id="rocket"></div>
        <div className="slide-object-img-wrapper contact-img-wrapper" id="like"></div>
        <style>{`
         .box-direction{direction: ${this.props.language === 'ar' ? 'rtl' : 'ltr'};}
        `}</style>
      </div>
    );
  }
}

export default React.memo(DigitalMarketingSlide);