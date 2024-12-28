// const AdSecData =
// [
//     {
//         title:'Start your financial journey with ',
//         desc:'Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus pellentesque elit. Pellentesque eget ut imperdiet nulla penatibus. Nascetur viverra arcu sed amet cursus purus.'
//     },
//     {
//         title:'Start your Career ',
//         desc:'Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus pellentesque elit. Pellentesque eget ut imperdiet nulla penatibus. Nascetur viverra arcu sed amet cursus purus.'
//     }
// ]
// export default AdSecData;

const storedValueAdASec = localStorage.getItem('AdSecData');

const AdSecData = storedValueAdASec ? JSON.parse(storedValueAdASec) : [
    {
        title:'Start your financial journey with ',
        desc:'Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus pellentesque elit. Pellentesque eget ut imperdiet nulla penatibus. Nascetur viverra arcu sed amet cursus purus.'
    },
    {
        title:'Start your Career ',
        desc:'Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus pellentesque elit. Pellentesque eget ut imperdiet nulla penatibus. Nascetur viverra arcu sed amet cursus purus.'
    }
];

if (!storedValueAdASec){
    localStorage.setItem('AdSecData' , JSON.stringify(AdSecData));
}

export const exporedAdSecData = AdSecData;