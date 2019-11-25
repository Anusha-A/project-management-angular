
export class ProjectDescStake {
    _id:string;
    projectId:number;
    projectDesc:string;
    stakeholders:string;
    constructor(_id:string,projectId:number,projectDesc:string, stakeholders:string)
    {
        this._id=_id;
        this.projectId=projectId;
        this.projectDesc=projectDesc;
        this.stakeholders=stakeholders;
    }
}
