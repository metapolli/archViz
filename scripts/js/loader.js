import * as THREE from "./three/build/three.module.js";
import {GLTFLoader} from "./three/examples/jsm/loaders/GLTFLoader.js";


let loader = new GLTFLoader()
loader.load(
    "../archViz/models/InteriorTest.glb",
    (gltf)=>{
        var scene = document.querySelector('a-scene').object3D;
        var model = gltf.scene;
        model.position.set(0, 0.033, 0);
        scene.add( gltf.scene );
    },
    (model)=>{
        let fraction = model.loaded/model.total*100;
        let percentage = Math.trunc(fraction);
        document.getElementById("status").innerHTML = "Assets are loading!<br>"+percentage+"% loaded &#128571;";
        document.getElementById("progress").style.width = percentage+"%";
        if(percentage===100||percentage>100){
            document.getElementById("status").innerHTML = "Assets are loaded!&#129409; Your browser is rendering<br>Please wait a FEW SECONDS!";
            setTimeout(()=>{
                document.getElementById("preloader").style.display="none";
            },5000)
        }
    }
)
