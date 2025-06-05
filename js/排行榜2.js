document.addEventListener("DOMContentLoaded", function() {  
    const leaderboardTable = document.getElementById("leaderboard").getElementsByTagName("tbody")[0];  
  
    // 示例数据  
    const leaderboardData = [  
        { rank: 1, name: "张三", score: 1000 },  
        { rank: 2, name: "李四", score: 950 },  
        { rank: 3, name: "王五", score: 900 },  
        { rank: 4, name: "赵六", score: 850 },  
        { rank: 5, name: "孙七", score: 800 } ,
         { rank: 6, name: "吴八", score: 700 } 
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