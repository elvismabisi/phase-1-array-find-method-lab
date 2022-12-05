// code your solution here
function superbowlWin(record) {
    let winYear = record.find(function (win){
        return win.result == "W"})
    if (winYear !== undefined) {
        return winYear.year
    }else {
        return undefined
    }
}superbowlWin(record)