class User{
    constructor(name, email, profession){
        this.name = name;
        this.email = email;
        this.profession = profession;
        this.taskList = [];
    }

    addTask(name, description, status = 'incompleted'){
        this.taskList.push(taskCreator(name, description));
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

const task1 = taskCreator('Coding', 'Finished the ui of the project');

console.log(task1);