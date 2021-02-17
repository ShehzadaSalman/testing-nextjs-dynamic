import { Component } from 'react';
import * as THREE from '../../lib/threejs/build/three.module.js';
import { GLTFLoader } from '../../lib/threejs/jsm/loaders/GLTFLoader.js';
import { getDeviceName } from '../../lib/helper';
import { useRouter } from 'next/router';

let deviceName = getDeviceName();
let orientation = '';
let renderer, camera, circleScene, idleAction, signatureAction,
  idleAction2, signatureAction2, idleAction3, signatureAction3, idleAction4,
  signatureAction4;
  let mixer, model, mixer2, model2, mixer3, model3, mixer4, model4;
  let  loadingAction, loadingAction2, loadingAction3, loadingAction4;
  let loading,loading2, loading3, loading4, idle, idle2, idle3, idle4, signature, signature2, signature3, signature4;
  if (window.innerHeight > window.innerWidth) {
   orientation = 'potrait';
  }  else {
  orientation = 'landscape';
  }

const DiscoverSlide = (props) =>{
  const routers = useRouter()
  const {locale} = routers;
  return <Discover {...props} language={locale}  />
}




  class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modelLoaded: false,
      scene: "",
      ship: {
        id: 'ship',
        url: 'images/slide-4-object-1.png',
        path: '/gltf/fold-3/ship/animation/gltf/',
        fileName: 'ship (anim group transitions).gltf',
        className: 'dis-model-1',
        objectName: 'ship_group2',
        rotation: { x: 0, y: -1.7, z: 0 },
        // to managing the size
        scaling:
        deviceName === 'Desktop'
        ? { x: 12, y: 12, z: 12 }
        : deviceName === 'Mobile'
        ? orientation === 'potrait'
          ? { x: 10, y: 10, z: 10 }
          : { x: 15, y: 15, z: 15 }
        : window.innerHeight > 667
        ? { x: 13, y: 13, z: 13 }
        : { x: 16, y: 16, z: 16 },
        // to manage the position
        position:
        deviceName === 'Desktop'
        ? { x: 2, y: 2.3, z: 0 }
        : deviceName === 'Mobile'
        ? orientation === 'potrait'
            ? { x: 4, y: 3.2, z: 0 }
            : { x: 2.6, y: 2.3, z: 0 }
        : window.innerHeight > 667
            ? { x: 3.2, y: 3.2, z: 0 }
            : { x: 3.8, y: 2.4, z: 0 },
        // to manage the position
        Leaving:
        deviceName === 'Desktop'
        ? { x: 2, y: 2.3, z: 0 }
        : deviceName === 'Mobile'
        ? orientation === 'potrait'
            ? { x: 3.8, y: 3.5, z: 0 }
            : { x: 2.6, y: 2.3, z: 0 }
        : window.innerHeight > 667
            ? { x: 3.2, y: 3.2, z: 0 }
            : { x: 3.8, y: 2.4, z: 0 },    

        circlePosition:
        deviceName === 'Desktop'
        ? { x: 2.1, y: 2.4, z: 0 }
        : deviceName === 'Tablet'
        ? orientation === 'potrait'
          ? { x: 3.6, y: 2.15, z: 0 }
          : { x: 2.7, y: 2.25, z: 0 }
        : window.innerHeight > 667
        ? { x: 4.1, y: 3.2, z: 0 }
        : { x: 3.8, y: 2.7, z: 0 },

        circleRadius:
        deviceName === 'Desktop'
        ? 0.8
        : deviceName === 'Tablet'
        ? orientation === 'potrait'
          ? 0.45
          : 0.6
        : window.innerHeight > 667
        ? 0.75
        : 0.85,
    isBindSignature: true,
      },
      car: {
        id: 'car',
        url: 'images/slide-4-object-2.png',
        path: '/gltf/fold-3/car/animations/gltf/',
        fileName: 'car (anim group transitions).gltf',
        className: 'dis-model-2',
        objectName: 'car_group3',
        rotation: { x: 0, y: -1, z: 0 },
        scaling:
        deviceName === 'Desktop'
        ? { x: 11, y: 11, z: 11 }
        : deviceName === 'Mobile'
        ? orientation === 'potrait'
          ? { x: 9, y: 9, z: 9 } 
          : { x: 10, y: 10, z: 10 }
        : window.innerHeight > 667
        ? { x: 18, y: 18, z: 18 }
        : { x: 21, y: 21, z: 21 },

        position:
        deviceName === 'Desktop'
        ? { x: 2.2, y: 0.2, z: 0 }
        : deviceName === 'Mobile'
        ? orientation === 'potrait'
          ? { x: 4, y: .7, z: 0 } 
          : { x: 2.8, y: 0.5, z: 0 }
        : window.innerHeight > 667
        ? { x: 4.2, y: -0.7, z: 0 }
        : { x: 4.2, y: -0.6, z: 0 },

        circlePosition:
        deviceName === 'Desktop'
        ? { x: 2.1, y: 0.1, z: 0 }
        : deviceName === 'Tablet'
        ? orientation === 'potrait'
          ? { x: 3.65, y: 0.7, z: 0 }
          : { x: 2.7, y: 0.4, z: 0 }
        : window.innerHeight > 667
        ? { x: 3.9, y: -0.5, z: 0 }
        : { x: 3.8, y: -0.4, z: 0 },

        circleRadius:
        deviceName === 'Desktop'
        ? 0.7
        : deviceName === 'Tablet'
        ? orientation === 'potrait'
          ? 0.4
          : 0.5
        : window.innerHeight > 667
        ? 0.75
        : 0.8,

    signaturePosition:
      window.innerHeight > 667 ? { x: 3.9, y: 0, z: 0 } : { x: 3.8, y: 0, z: 0 },
    isBindSignature: true,
      },
      plane: {
        id: 'plane',
        url: 'images/slide-4-object-3.png',
        path: '/gltf/fold-3/plane/animation/gltf/',
        fileName: 'plane (anim group transitions).gltf',
        className: 'dis-model-3',
        objectName: 'plane_group2',
        rotation: { x: 0.5, y: 4.5, z: 0.1 },
        scaling:
        deviceName === 'Desktop'
        ? { x: 10, y: 10, z: 10 }
        : deviceName === 'Mobile'
        ? orientation === 'potrait'
          ? { x: 8.5, y: 8.5, z: 8.5 }
          : { x: 13, y: 13, z: 13 }
        : window.innerHeight > 667
        ? { x: 18, y: 18, z: 18 }
        : { x: 21, y: 21, z: 21 },

        position:
        deviceName === 'Desktop'
        ? { x: 8, y: 2.5, z: 0 }
        : deviceName === 'Mobile'
        ? orientation === 'potrait'
          ? { x: 5.7, y: 3.2, z: 0 }
          : { x: 7.4, y: 2.3, z: 0 }
        : window.innerHeight > 667
        ? { x: 6.1, y: 3.2, z: 0 }
        : { x: 6.4, y: 2.6, z: 0 },

        circlePosition:
        deviceName === 'Desktop'
            ? { x: 7.9, y: 2.3, z: 0 }
            : deviceName === 'Tablet'
            ? orientation === 'potrait'
              ? { x: 6.4, y: 2.1, z: 0 }
              : { x: 7.4, y: 2.1, z: 0 }
            : window.innerHeight > 667
            ? { x: 6.1, y: 3.2, z: 0 }
            : { x: 6.2, y: 2.6, z: 0 },

        circleRadius:
        deviceName === 'Desktop'
        ? 0.65
        : deviceName === 'Tablet'
        ? orientation === 'potrait'
          ? 0.45
          : 0.5
        : window.innerHeight > 667
        ? 0.7
        : 0.8,

    signaturePosition:
      window.innerHeight > 667 ? { x: 6.1, y: 2.8, z: 0 } : { x: 6.2, y: 2.4, z: 0 },
    isBindSignature: true,
      },
      flying: {
        id: 'flying',
        url: 'images/slide-4-object-4.png',
        path: '/gltf/fold-3/stickman flying/animations/gltf/',
        fileName: 'flying man (anim group transitions).gltf', //"flying man (anim group).glb",
        className: 'dis-model-4',
        objectName: 'flying_group2',
        rotation: { x: 0, y: 4, z: 0 },
        scaling:
        deviceName === 'Desktop'
        ? { x: 12, y: 12, z: 12 }
        : deviceName === 'Mobile'
        ? orientation === 'potrait'
          ? { x: 11, y: 11, z: 11 }
          : { x: 8, y: 8, z: 8 }
        : window.innerHeight > 667
        ? { x: 13, y: 13, z: 13 }
        : { x: 16, y: 16, z: 16 },

        position:
        deviceName === 'Desktop'
        ? { x: 8, y:0.5, z: 0 }
        : deviceName === 'Mobile'
        ? orientation === 'potrait'
          ? { x: 5.9, y: 0.9, z: 0 }
          : { x: 7.4, y: 0.8, z: 0 }
        : window.innerHeight > 667
        ? { x: 6, y: -0.5, z: 0 }
        : { x: 6.2, y: -0.5, z: 0 },

        circlePosition:
        deviceName === 'Desktop'
            ? { x: 7.9, y: 0, z: 0 }
            : deviceName === 'Tablet'
            ? orientation === 'potrait'
              ? { x: 6.45, y: 0.7, z: 0 }
              : { x: 7.5, y: 0.55, z: 0 }
            : window.innerHeight > 667
            ? { x: 6, y: -0.5, z: 0 }
            : { x: 6.2, y: -0.5, z: 0 },

        circleRadius:
        deviceName === 'Desktop'
        ? 0.65
        : deviceName === 'Tablet'
        ? orientation === 'potrait'
          ? 0.4
          : 0.5
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

    /* closing the loader when the discover component has been mounted */
    document.querySelector("#loader").style.display = 'none';
/* the 3d objects on the plane div */
    let elem = document.getElementById('plane');
    if (elem && this.props.activeSlide === this.props.slideId && !elem.hasChildNodes()) {
    this.loadModel(this.state.plane);
    THREE.Cache.enabled = true ; 
    } 
  }




componentDidUpdate(prevProps, prevState) {
 let elem = document.getElementById('plane');
    if (elem && this.props.activeSlide === this.props.slideId){
     this.playDiscoverAnimation();
  }
  if (elem && this.props.activeSlide === this.props.slideId && !elem.hasChildNodes()){
    window.location.reload();
    console.log("we are reloading the page because there weren't any child node");
  }
  }

playDiscoverAnimation = () => {

  console.log("playing the animation on component update");
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

  
  let mouse = new THREE.Vector2();
  let th = this;
  let container = document.getElementById(obj.id);
  let height = container.clientHeight;
  let width = obj.id === 'idle-pigeon' ? window.innerWidth : container.clientWidth;
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


// Adding the car model to the Scene
// =========================================================== //
let gltf4 = await th.loadGLTFModel('/gltf/fold-3/car/animations/gltf/', 'car (anim group transitions).gltf');
 model4 = gltf4.scene;
 model4.position.set(this.state.car.position.x, this.state.car.position.y, this.state.car.position.z);
 model4.scale.set(this.state.car.scaling.x, this.state.car.scaling.y, this.state.car.scaling.z);
 model4.rotation.x += this.state.car.rotation.x;
 model4.rotation.y += this.state.car.rotation.y;
 model4.rotation.z += this.state.car.rotation.z;

 th.state.scene.add(model4);
 mixer4 = new THREE.AnimationMixer(model4);
 // Creating the loading animation by name
  loading4 = THREE.AnimationClip.findByName(gltf4.animations, 'slide_in_L');
  loadingAction4 = mixer4.clipAction(loading4);
  loadingAction4.setLoop(THREE.LoopOnce);
  loadingAction4.clampWhenFinished = true;
   // Creating the idle animation by name
  idle4 = THREE.AnimationClip.findByName(gltf4.animations, 'idle');
  idleAction4 = mixer4.clipAction(idle4);
   // creating the signature animation by name

  signature4 = THREE.AnimationClip.findByName(gltf4.animations, 'Signature');

  signatureAction4 = mixer4.clipAction(signature4);   // play animations by name

  signatureAction4.setLoop(THREE.LoopOnce);
  loadingAction4.clampWhenFinished = true;
  loadingAction4.play();
  idleAction4.play();




  


// Adding the  Ship Model to the scene
let gltf3 = await th.loadGLTFModel('/gltf/fold-3/ship/animation/gltf/', 'ship (anim group transitions).gltf');
 model3 = gltf3.scene;
 model3.position.set(this.state.ship.position.x, this.state.ship.position.y, this.state.ship.position.z);
 model3.scale.set(this.state.ship.scaling.x, this.state.ship.scaling.y, this.state.ship.scaling.z);
 model3.rotation.x += this.state.ship.rotation.x;
 model3.rotation.y += this.state.ship.rotation.y;
 model3.rotation.z += this.state.ship.rotation.z;

 th.state.scene.add(model3);
 mixer3 = new THREE.AnimationMixer(model3);
 // Creating the loading animation by name
  loading3 = THREE.AnimationClip.findByName(gltf3.animations, 'slide_in_L');
  loadingAction3 = mixer3.clipAction(loading3);
  loadingAction3.setLoop(THREE.LoopOnce);
  loadingAction3.clampWhenFinished = true;



   // Creating the idle animation by name
  idle3 = THREE.AnimationClip.findByName(gltf3.animations, 'idle');
  idleAction3 = mixer3.clipAction(idle3);
   // creating the signature animation by name
  obj.id == 'car' ? signature3 = THREE.AnimationClip.findByName(gltf3.animations, 'Signature')
  : signature3 = THREE.AnimationClip.findByName(gltf3.animations, 'signature');
  signatureAction3 = mixer3.clipAction(signature3);   // play animations by name
  signatureAction3.setLoop(THREE.LoopOnce);
  loadingAction3.clampWhenFinished = true;
  loadingAction3.play();
  idleAction3.play();



// Adding the flying model to the scene
//=========================================================================== //
  let gltf2 = await th.loadGLTFModel('/gltf/fold-3/stickman flying/animations/gltf/', 'flying man (anim group transitions).gltf');
   model2 = gltf2.scene;
   model2.position.set(this.state.flying.position.x, this.state.flying.position.y, this.state.flying.position.z);
   model2.scale.set(this.state.flying.scaling.x, this.state.flying.scaling.y, this.state.flying.scaling.z);
   model2.rotation.x += this.state.flying.rotation.x;
   model2.rotation.y += this.state.flying.rotation.y;
   model2.rotation.z += this.state.flying.rotation.z;

   th.state.scene.add(model2);
   mixer2 = new THREE.AnimationMixer(model2);
   // Creating the loading animation by name
    loading2 = THREE.AnimationClip.findByName(gltf2.animations, 'slide_in_L');
    loadingAction2 = mixer2.clipAction(loading2);
    loadingAction2.setLoop(THREE.LoopOnce);
    loadingAction2.clampWhenFinished = true;
     // Creating the idle animation by name
    idle2 = THREE.AnimationClip.findByName(gltf2.animations, 'idle');
    idleAction2 = mixer2.clipAction(idle2);
     // creating the signature animation by name
    obj.id == 'car' ? signature2 = THREE.AnimationClip.findByName(gltf2.animations, 'Signature')
    : signature2 = THREE.AnimationClip.findByName(gltf2.animations, 'signature');
    signatureAction2 = mixer2.clipAction(signature2);   // play animations by name
    signatureAction2.setLoop(THREE.LoopOnce);
    loadingAction2.clampWhenFinished = true;
    loadingAction2.play();
    idleAction2.play();


// Loading the plane model in the Scene
//=====================================================================================

  let gltf = await th.loadGLTFModel('/gltf/fold-3/plane/animation/gltf/', 'plane (anim group transitions).gltf');
  model = gltf.scene;
  model.position.set(this.state.plane.position.x, this.state.plane.position.y, this.state.plane.position.z);
  model.scale.set(this.state.plane.scaling.x, this.state.plane.scaling.y, this.state.plane.scaling.z);
  model.rotation.x += this.state.plane.rotation.x;
  model.rotation.y += this.state.plane.rotation.y;
  model.rotation.z += this.state.plane.rotation.z;

  th.state.scene.add(model);
  mixer = new THREE.AnimationMixer(model);

// Creating the loading animation by name
  loading = THREE.AnimationClip.findByName(gltf.animations, 'slide_in_L');
  loadingAction = mixer.clipAction(loading);
  loadingAction.setLoop(THREE.LoopOnce);
  loadingAction.clampWhenFinished = true;

// creating the leaving animation
// let leaving = THREE.AnimationClip.findByName(gltf.animations, 'slide_out_L');
// th.state.leavingAction = mixer.clipAction(leaving);

// th.state.leavingAction = mixer.clipAction(gltf.animations[3]);
// th.state.leavingAction.timeScale = -1;
// th.state.leavingAction.setLoop(THREE.LoopOnce);

// th.state.leavingAction.clampWhenFinished = true;


 // Creating the idle animation by name
 idle = THREE.AnimationClip.findByName(gltf.animations, 'idle');
 idleAction = mixer.clipAction(idle);
  // creating the signature animation by name
  obj.id == 'car' ? signature = THREE.AnimationClip.findByName(gltf.animations, 'Signature')
  : signature = THREE.AnimationClip.findByName(gltf.animations, 'signature');
  signatureAction = mixer.clipAction(signature);   // play animations by name
  signatureAction.setLoop(THREE.LoopOnce);
  loadingAction.clampWhenFinished = true;
  loadingAction.play();
  idleAction.play();
  if (obj.isBindSignature) {
  let playing = false;
   // Event listeners for the plane

   
   mixer.addEventListener('finished', function (e) {
      // playing = false;
      signatureAction.stop();
      // model.scale.set(obj.scaling.x, obj.scaling.y, obj.scaling.z);
      // model.position.set(obj.position.x, obj.position.y, obj.position.z);
      idleAction.play();
    });

    mixer2.addEventListener('finished', function (e) {
      // playing = false;
      signatureAction2.stop();
      // model.scale.set(obj.scaling.x, obj.scaling.y, obj.scaling.z);
      // model.position.set(obj.position.x, obj.position.y, obj.position.z);
      idleAction2.play();
    });
    
    mixer3.addEventListener('finished', function (e) {
      // playing = false;
      signatureAction3.stop();
      // model.scale.set(obj.scaling.x, obj.scaling.y, obj.scaling.z);
      // model.position.set(obj.position.x, obj.position.y, obj.position.z);
      idleAction3.play();
    });
    
    mixer4.addEventListener('finished', function (e) {
      // playing = false;
      signatureAction4.stop();
      // model.scale.set(obj.scaling.x, obj.scaling.y, obj.scaling.z);
      // model.position.set(obj.position.x, obj.position.y, obj.position.z);
      idleAction4.play();
    });
    


// Clicked functionality  for the models
    function clicked(event, isClicked) {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        let intersects = raycaster.intersectObjects(th.state.scene.children, true);
        if (intersects.length > 0) {
           if(intersects[0].object.parent.name == 'flying_group2'){
            if(isClicked){
              signatureAction2.stop();
             }
              signatureAction4.stop();
              signatureAction3.stop();
              signatureAction.stop();
           
              signatureAction2.play();
           }
           else if(intersects[0].object.parent.name == 'plane_group2'){
            if(isClicked){
              signatureAction.stop();   
            }
              signatureAction4.stop();
              signatureAction3.stop();
              signatureAction2.stop();     
              signatureAction.play();
           }
           else if(intersects[0].object.parent.name == 'ship_group2'){
            if(isClicked){
              signatureAction3.stop();
             }
              signatureAction4.stop();   
              signatureAction2.stop();
             signatureAction.stop();
             signatureAction3.play();

           }
           else if(intersects[0].object.parent.name == 'car_group3'){
            if(isClicked){
              signatureAction4.stop();
            } 
             signatureAction3.stop();
             signatureAction2.stop();
             signatureAction.stop();
             signatureAction4.play();
           }
        }
    }
    if(th.props.activeSlide === th.props.slideId){
      document.addEventListener('mousemove', mousemovefun);
      console.log("the mouse move event is added");
    }else{
      document.removeEventListener('mousemove', mousemovefun);
      console.log("the mouse move event is removed"); 
    }
   
   function mousemovefun(event){
    clicked(event, false);
    camera.updateMatrixWorld();
   
   }



 {/*  Remove this code for mobile   */}  
 
    let deviceName = getDeviceName();
    document.addEventListener('click', function (event) {
      if (deviceName === 'Mobile') {
        clicked(event, true);
        camera.updateMatrixWorld();
      } else{
        clicked(event, true);
        camera.updateMatrixWorld();
      }
    });
   

    let discoverdiv = document.getElementById('content-wrapper1'); 
let plane = document.getElementById('plane');
 renderer.domElement.addEventListener('wheel', function (event) {
    console.log("renderer mouse move event");

  });




  
  }

// trying to load the second 3d object

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
    var delta = clock.getDelta();
    if (th.props.activeSlide === th.props.slideId) {


      mixer.update(delta);
      mixer2.update(delta);
      mixer3.update(delta);
      mixer4.update(delta);
      renderer.autoClear = true;
      renderer.render(th.state.scene, camera);

      

    }
  }


}

  async loadGLTFModel(path, fileName) {
    return new Promise((res, rej) => {
      var loader = new GLTFLoader().setPath(path);
      loader.load(fileName,function (gltf) {
          res(gltf);
        },undefined,function (e) {
          console.error(e);
        }
      );
    });
  }

// function to play video
playVideo = () => {
let checkvar = $('.videoWraps');
$(".videoWraps").append('<div  id = "videos" className="videos"><video controls autoplay><source src="https://techbay.co/images/welcome.mp4" type="video/mp4" /></video></div>');
$('.videoWraps').css("display", "block");

{/* Closing the Video wrapper and everything */}

  // $(".videoWraps a").click(function (event) {
  //   event.preventDefault();
  //   $(".videoWraps").fadeOut();
  //   $(".videos").remove();
  // });


{/*  Closing the video when clicked else where on the body
  $(document.body).click(function (e) {
    $(".videoWraps").fadeOut();
    $(".videos").remove();
    $(".formPopup").fadeOut();
    $(".msg").html("");
    $("#services1, #services2, #services3").css("display", "block");
    $(".messageBox").css("display", "none");
  });

*/}

{/*    To stop the events from bubbling up to the body
  $(".videos, .playIcon, .formInner, .PopupForm, .get ").click(function (
    e
  ) {
    e.stopPropagation(); // this stops the event from bubbling up to the body
  });


 */}


}


// Function to close the video Popup

closeVideo = () => {
  console.log("close this video");
}






  // Let's redo the loading of the model and everything to test out the raycaster
  render() {



    return (
      <React.Fragment>

      <div className=" slide-section toggleDetails scroll-down-trigger"    onKeyDown = {(e) => e.preventDefault()}  onKeyPress = {(e) => e.preventDefault()   }>
        <div
          className="contentSlideSection slide-content-wrapper p41 d-flex flex-column slidefirst"
          id="content-wrapper1"
        >
          
      
{/* right arrow for mobile */}
{this.props.nextSlide 
?<a   className = "mobile-arrow-div-right" onClick = {this.props.nextSlide}>
<img src = "/images/next.png"  alt = "next arrow"/>
</a>
: ''
}

          <div className="mg-slide-content text-center flex-fill d-flex align-items-start align-items-md-center">
            <div className="container dt_container" id="container1">
              {/* <div className="waves"></div> */}
              <div className="mainScreenbottom wave-effect wave-anim">
                <div className="waves-shape shape-three">
                  <div className="wave wave-three"></div>
                </div>
              </div>

              <div className="mg-slide-info text-left m-auto" id="info">
                <div className="showdetail">
                  <h5 className="mg-title-light fw-light"></h5>
                  {this.props.language === 'en-US' 
                   ?<h1 className="mg-title" >{this.props.data.sliders[0].short_title}</h1>
                   :<h1 className="mg-title" >{this.props.data.sliders[0].short_title_arabic}</h1>
                   }
  
                  {this.props.language === 'en-US' 
                    ?<h2 className="mg-title" style = {{ color:  "#164777"}} >{this.props.data.sliders[0].title}</h2>
                    :<h2 className="mg-title" style = {{ color:  "#164777"}} >{this.props.data.sliders[0].title_arabic}</h2>
                  }
                   
                  <p className="mg-p truncate-height mb-hide-description" style = {{ marginTop: "25px"  }}>
                  {<></>
                   }

                     {this.props.language === 'en-US' 
                    ?<>{this.props.data.sliders[0].description}</>
                    :<>{this.props.data.sliders[0].description_arabic}</>
                    }



                  </p>
                  <img onClick = {this.playVideo} className="playIcon" src="/images/white-play-icon.png" alt= "play video" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide-object-img-wrapper contact-img-wrapper" id="plane"></div>
      </div>
 
    </React.Fragment>
    );
  }
}
export default React.memo(DiscoverSlide);
