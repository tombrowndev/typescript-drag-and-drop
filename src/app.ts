/** 
 * For now, all code will be written in 1 file as per the course recommendation. 
 * Later, it will be separated up as we learn more about modules in TypeScript.
 */

class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;

    constructor() {
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;
    }
}