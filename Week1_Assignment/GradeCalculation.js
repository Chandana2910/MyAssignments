// 1. Create a function that takes a student's score as a parameter
function studentScore(score) {
    // 2. Declare and initialize the variable for the grade
    let grade = "";

    // 3. Use a switch statement with 'true' to assess score ranges
    switch (true) {
        case (score >= 90 && score <= 100):
            grade = "A+";
            break;
        case (score >= 80 && score < 90):
            grade = "A";
            break;
        case (score >= 70 && score < 80):
            grade = "B";
            break;
        case (score >= 60 && score < 70):
            grade = "C";
            break;
        case (score >= 0 && score < 60):
            grade = "D";
            break;
        default:
            grade = "Invalid Score";
            break;
    }

    // 4. Return the corresponding grade
    return grade;
}

// 5. Call the function and print the result
console.log("Grade of student is " + studentScore(95));   // Output: Grade A+
console.log("Grade of student is " + studentScore(82));   // Output: Grade A
console.log("Grade of student is " + studentScore(74));   // Output: Grade B
console.log("Grade of student is " + studentScore(50));   // Output: Grade D
console.log("Grade of student is " + studentScore(105)); // Output: Grade Invalid Score
