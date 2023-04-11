class profession {
    constructor(hobby, job, prise) {
        this._hobby = hobby,
            this._job = job,
            this._prise = prise
    }
    job() {
        alert(`This hobby:` + this.hobby)

    }
    get price() {
        return this._prise
    }
    set price(Dollor) {
        this._prise = Dollor;
    }
}


class teacher extends profession {
    constructor(hobby, job, price, location,) {
        super(hobby, job, price),
            this._location = location

    }
    vazifas() {
        console.log("Teacher");
    }
}

class developper extends profession {
    constructor(hobby, job, price, worktype) {
        super(hobby, job, price),
            this.worktype = worktype

    }
    vazifas() {
        console.log("programming");
    }

};
let kasb = new profession("song", "bekorchilik", "$0")
console.log(kasb);
let enlishTeacher = new teacher("play dance", "teaching language", "$1000", "School")
console.log(enlishTeacher);
let webDevelopper = new teacher("learn program language", "write codde", "$2000", "remote")
console.log(webDevelopper);

