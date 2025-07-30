// JavaScript program to print maximum meetings in one room using
// Greedy Algorithm

class Meeting {
    constructor(startTime, endTime, pos) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.pos = pos;
    }
}

// Custom comparator to compare meetings according to end time
function compare(m1, m2) {
    return m1.endTime - m2.endTime;
}

// Function for finding maximum meetings in one room
function maxMeetings(start, end) {
    let res = [];
    let n = start.length;

    // Store details of all meetings in an array
    let meets = [];
    for (let i = 0; i < n; i++) {
        meets.push(new Meeting(start[i], end[i], i + 1));
    }
    // Sort the meetings according to the ending time
    meets.sort(compare);
    console.log(meets);

    // Initialize current time as -1
    let currTime = -1;
    for (let i = 0; i < n; i++) {
        // Check if the meeting room is free at the start time of ith meeting
        if (meets[i].startTime > currTime) {
            currTime = meets[i].endTime;
            res.push(meets[i].pos);
        }
    }
    
    // Sort the result array
    res.sort((a, b) => a - b);
    return res;
}

let start = [1, 3, 0, 5, 8, 5];
let end = [2, 4, 6, 7, 9, 9];

let res = maxMeetings(start, end);
console.log(res.join(" "));