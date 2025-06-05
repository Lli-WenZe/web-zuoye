document.addEventListener("DOMContentLoaded", function() {  
    const leaderboardTable = document.getElementById("leaderboard1").getElementsByTagName("tbody")[0];  
  
    // 示例数据  
    const leaderboardData = [  
        { rank: 1, name: "李汶泽", score: 1000},  
        { rank: 2, name: "田夏天", score: 950 },  
        { rank: 3, name: "黄钠", score: 900 },  
        { rank: 4, name: "袁仁泽", score: 850 },  
        { rank: 5, name: "孙笑笑", score: 800 } ,
         { rank: 6, name: "王思雨", score: 700 }  
    ];  
  
    // 动态生成表格内容  
    leaderboardData.forEach(item => {  
        const row = leaderboardTable.insertRow();  
        const rankCell = row.insertCell(0);  
        const nameCell = row.insertCell(1);  
        const scoreCell = row.insertCell(2);  
  
        rankCell.textContent = item.rank;  
        nameCell.textContent = item.name;  
        scoreCell.textContent = item.score;  
    });  
});