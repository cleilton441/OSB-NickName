 
export const MaskInput = (name: string) => {
    if(name === ""){
        return false
    }

    if(name.includes("1") || name.includes("2")|| name.includes("3")|| name.includes("4")|| name.includes("5")|| name.includes("6")
    || name.includes("7")|| name.includes("8")|| name.includes("9")|| name.includes("0")){
        return true
    } else {
        return false

    }
}