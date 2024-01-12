import {CollectorVMApi} from 'meerkat_automation_apis';
import {CollectorVM} from 'meerkat_automation_apis';


const api = new CollectorVMApi()

function addMessage(message){
  console.log('Parsing Each Object field IP= ' + message.ip + ' Name = ' + message.name + ' ID = ' + message.id)
  //console.log(message)
}
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
    console.log(data)
    data.forEach(addMessage)
  }
};
var response = api.searchCollectorVM(callback);
//console.log(response)