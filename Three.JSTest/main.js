var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var material;
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var loader = new THREE.TextureLoader();

// load a resource
loader.load(
    // resource URL
    'texture.jpg',

    function ( texture ) {
        material = new THREE.MeshBasicMaterial( {
            map: texture
        } );
    },

    undefined,

    function ( err ) {
        console.error( 'An error happened.' );
    }
);
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

var cameraZ = 5;

document.addEventListener("mousewheel", function(e){
    cameraZ += e.deltaY / 50;
}, false);

function main() {
    requestAnimationFrame( main );
    renderer.render( scene, camera );

    camera.position.z = cameraZ;

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
}
main();
