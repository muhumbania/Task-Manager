class User{
    constructor(name, email, profession){

    }

    addTask(name, description, status = 'incompleted'){

    }

    showAll(){

    }

}

function taskCreator(name, description){
    let status = 'incompleted';

    function getName(){
        return name;
    }

    function getDescription(){
        return description;
    }

    
    function getStatus(){
        return status;
    }

    return {
        name : getName(),
        description : getDescription(),
        status : getStatus()
    }
  

}