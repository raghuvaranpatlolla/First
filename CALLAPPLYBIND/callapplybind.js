let obj1={first:"codegnan", last:"solutions"}


function func(greeting1){
    console.log(greeting1+" " + this.first + " " + this.last);
}
func.call(obj1,"JFS")
func.apply(obj1,["PFS"])
let a = func.bind(obj1)
a("DS")