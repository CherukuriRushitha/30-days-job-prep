let marks = 85;
if (marks < 0 || marks > 100){
    console.log("Invalid Marks")
}else if (marks >= 90){
    console.log("Grade A");
}else if (marks >= 75 ){
    console.log("Grade B");
}else if (marks >= 50 ){
    console.log("Grade C");
}else if (marks >= 35 ){
    console.log("Pass");
}else{
    console.log("Fail");
}