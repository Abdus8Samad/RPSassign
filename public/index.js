const winOrLose = (weapon1, weapon2) =>{
    let result;
    let arr = ['Rock','Paper','Scissors','Rock'];
    let index = arr.indexOf(weapon1);
    if(weapon2 === arr[index+1] || weapon1 === weapon2){
        result = 0;
    } else {
        result = 1;
    }
    return result;
}
const weapon = () =>{
    let arr = [];
    for(var i=0;i<4;i++){
        let rand = Math.ceil(Math.random()*3);
        let ret;
        switch(rand){
            case 1:
                ret = 'Rock'
                break;
            case 2:
                ret = 'Paper'
                break;
            default:
                ret = 'Scissors'
        }
        arr.push(ret);
    }
    return arr;
}
var scores = new Array(4).fill(0);
const iterations = 50;
const game = () =>{
    for(var i=1;i<=iterations;i++){
        let matches = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
        var parent = document.querySelector('div.iterations');
        let arr = weapon();
        for(var j=0;j<4;j++){
            for(var k=0;k<4;k++){
                if(k === j){
                    continue;
                }
                let result = winOrLose(arr[j],arr[k]);
                matches[j][k] = scores[j] + result;
                scores[j] += result;
            }
        }
        const elem = (i) => `
        <hr />
        <h2>Iteration - ${i}</h2>
        <table>
            <tr>
                <th>Player 1</th>
                <th>Player 2</th>
                <th>Player 3</th>
                <th>Player 4</th>
            </tr>
            <tr>
                <td>${arr[0]}</td>
                <td>${arr[1]}</td>
                <td>${arr[2]}</td>
                <td>${arr[3]}</td>
            </tr>
        </table><br /><br />
        <table>
            <tr>
                <td>Totals</td>
                <td>------</td>
                <td colspan="4">------------------ &nbsp;&nbsp;Against&nbsp;&nbsp; ------------------</td>
            </tr>
            <tr>
                <th>------</th>
                <th>------</th>
                <th>Player 1</th>
                <th>Player 2</th>
                <th>Player 3</th>
                <th>Player 4</th>
            </tr>
            <tr>
                <td rowspan="4" style="vertical-align: middle;">Player Wins</td>
                <td>Player 1</td>
                <td>-</td>
                <td>${matches[0][1]}</td>
                <td>${matches[0][2]}</td>
                <td>${matches[0][3]}</td>
            </tr>
            <tr>
                <td>Player 2</td>
                <td>${matches[1][0]}</td>
                <td>-</td>
                <td>${matches[1][2]}</td>
                <td>${matches[1][3]}</td>
            </tr>            
            <tr>
                <td>Player 3</td>
                <td>${matches[2][0]}</td>
                <td>${matches[2][1]}</td>
                <td>-</td>
                <td>${matches[2][3]}</td>
            </tr>
            <tr>
                <td>Player 4</td>
                <td>${matches[3][0]}</td>
                <td>${matches[3][1]}</td>
                <td>${matches[0][2]}</td>
                <td>-</td>
            </tr>            
        </table>
        <hr />
        `;
        var div = document.createElement('div');
        div.innerHTML = elem(i);
        parent.appendChild(div);
    }
}
game();