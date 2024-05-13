import { ConfogurationLoader } from "./modules/configuration.js";
import { settings } from "./modules/settings.js";
import { Presenter } from "./modules/presenter.js";


const rootElement = document.getElementById("#root");
const configurationLoader = new ConfogurationLoader();

const presenter = new Presenter();
const configuration = await configurationLoader.load(settings);
// presenter(configuration, rootElement);
console.log(configuration)
console.log(presenter.MDCTemplate(configuration))
// function idfinder(rootId){
//   const cnids = []

//     for (let i = 0; i < configuration.Channels.length; i++) {
//     const e = configuration.Channels[i];
//     const cnId = e.Id;
//     console.log(cnId)
//     cnids.push(cnId)
//   }

//   for (let i = 0; i < cnids.length; i++) {
//     const e = cnids[i];
//     if (e == rootId) {
//       console.log("совпад")
      
//     }
//   }
  
// }


function otrisovka(){
    document.getElementById('itemlist').innerHTML += `${presenter.SimpleTemplate(configuration)}`;
    document.getElementById('itemlist2').innerHTML += `${presenter.ChannelsTemplate(configuration)}`;
    document.getElementById('itemlist2').innerHTML += `${presenter.MDCTemplate(configuration)}`;
    document.getElementById('itemlist2').innerHTML += `${presenter.MSI_Template(configuration)}`;
    document.getElementById('itemlist2').innerHTML += `${presenter.RSO_Template(configuration)}`;
    document.getElementById('itemlist2').innerHTML += `${presenter.RSI_Template(configuration)}`;
    document.getElementById('itemlist2').innerHTML += `${presenter.UserGroup_Template(configuration)}`;
    // const simples = []; 
    // const htmlSimple = [];
    // const htmlObjectName = [];
    // const htmlObjects = [];
    // const htmlObjects2 = [];
    //   for (var key in configuration){
    //     //простые объекты
    //     if (typeof configuration[key] != 'object' || configuration[key] == null){
    //       var current = key + ": " + configuration[key];
    //       htmlSimple.push(current)
    //       simples.push({ key: key, value: configuration[key] });
    //     }
    //     if (typeof configuration[key] == 'object' & configuration[key] != null){
    //         current = configuration[key]
    //         var ObjectName = key
    //         htmlObjectName.push(ObjectName)
    //         // let objects = [];
    //         // let obj = {}
    //         // console.log(obj)
    //         for (var sub_key in current){
    //           var currentObject = key + " " +  sub_key + ": " + current[sub_key]
    //           var ObjectItem = sub_key + ": " + current[sub_key]
    //           htmlObjects.push(currentObject)
    //           htmlObjects2.push(ObjectItem)
    //           // objects.push(ObjectItem)
    //           // objects.push(ObjectItem)
    //         }
            // htmlObjects.push(objects)
            // console.log(ObjectName)
            // console.log(objects)
            // htmlObject.push(objects)
            

            
          // for (var sub_key in configuration[key]){
          //   current = sub_key + ": " + configuration[key];
          //   console.log(current)
          // }
          // var current = key + ": " + configuration[key];
          // console.log(current)
          // htmlObject.push(current)
      //   }  
      // }
    // console.log(ObjectName)
    // console.log(htmlObjects)
    
    // // for (let i = 0; i < htmlSimple.length; i++) {
    // //   const e = htmlSimple[i];
    // //   document.getElementById('itemlist').innerHTML += `<div>${e}</div>`
    // // }
    // for( let i = 0; i < simples.length; i++) {
    //   console.log(simples[i]);
    //   document.getElementById('itemlist').innerHTML += `${presenter.simgpleTemplate(simples[i])}<br/>`;
    // }
    // for (let i = 0; i < htmlObjectName.length; i++) {
    //   const e = htmlObjectName[i];
    //   document.getElementById('itemlist2').innerHTML += `<h4>${e}</h4>`
    //   for (let i2 = 0; i2 < htmlObjects.length; i2++) {
    //     const e2 = htmlObjects[i2];
    //     let FirstWord = e2.split(" ")[0] // Первое слово строки (название объекта)
    //     const e2_1 = htmlObjects2[i2]
    //     if (FirstWord == e){
    //       document.getElementById('itemlist2').innerHTML += `<div>${e2_1}</h4>`
    //     }
        
        
        // FirstWord = []
        // for (let i3 = 0; i3 < e.length; i3++) {
        //   const e3 = e2[i3];
        //   if (e3 == " ") {
        //     break
        //   }
        //   else {
        //     FirstWord.push
        //   }
        //}
        // if (e[0] == htmlObjectName){
        //   console.log()
        // }
        
    //   }
    // }
    // for (let i = 0; i < htmlObjectName.length; i++) {
    //   const e = htmlObjectName[i]
    //   document.getElementById('itemlist2').innerHTML += `<h4>${e}</h4>`
    //   for (let l = 0; l < htmlObjects.length; l++) {
    //     const e = htmlObjects[l];
    //     document.getElementById('itemlist2').innerHTML += `<div>${e[i]}</div>`     
    //   }
      // const name = htmlObjectName[i];
      // document.getElementById('itemlist2').innerHTML += `<h4>${name}:</h4>`
      // for (let i = 0; i < htmlObject.length; i++) {
      //   const prop = htmlObject[i];
      //   document.getElementById('itemlist2').innerHTML += `<div>${prop}</div>`
      // }
      
}
otrisovka();

// export class Presenter {
//     display(configuration, div) {       
//         const fullHtml = []
//           const current = 2
//                 if (current = RootSecurityObject) выводимДерево()
//                 if (current = простое) SimpleValueTemplate({ свойство: current, значение: конфигуарция[current]})
//                 if (current = объекта) templateДляОбъекта()
            

//         div.innerHtml = `<div>${fullHtml}</div>`;
//     }


//     SimpleValueTemplate = Handlebars.compile("<div>Простое значение: {{свойство}}:{{значение}}</div>");
//     templateДляОбъекта = Handlebars.compile(0);