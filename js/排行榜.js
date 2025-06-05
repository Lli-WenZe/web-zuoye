// script.js
document.addEventListener("DOMContentLoaded", function() {
    const leaderboardList = document.getElementById("leaderboard");
    
    // 初始排行榜数据
    let leaderboardData = [
        { id: 1, name: "起风了", artist: "买辣椒也用券", score: 1000, votes: 0 },
        { id: 2, name: "稻香", artist: "周杰伦", score: 950, votes: 0 },
        { id: 3, name: "光年之外", artist: "G.E.M.邓紫棋", score: 900, votes: 0 },
        { id: 4, name: "少年", artist: "梦然", score: 850, votes: 0 },
        { id: 5, name: "裹着心的光", artist: "林俊杰", score: 800, votes: 0 },
        { id: 6, name: "星辰大海", artist: "黄霄雲", score: 750, votes: 0 },
        { id: 7, name: "白月光与朱砂痣", artist: "大籽", score: 700, votes: 0 },
        { id: 8, name: "四季予你", artist: "程响", score: 650, votes: 0 },
        { id: 9, name: "漠河舞厅", artist: "柳爽", score: 600, votes: 0 },
        { id: 10, name: "海底", artist: "一支榴莲", score: 550, votes: 0 },
        { id: 11, name: "大风吹", artist: "王赫野", score: 520, votes: 0 },
        { id: 12, name: "错位时空", artist: "艾辰", score: 500, votes: 0 },
        { id: 13, name: "千千万万", artist: "深海鱼子酱", score: 480, votes: 0 },
        { id: 14, name: "踏山河", artist: "是七叔呢", score: 460, votes: 0 },
        { id: 15, name: "可可托海的牧羊人", artist: "王琪", score: 440, votes: 0 }
    ];
    
    // 渲染排行榜
    function renderLeaderboard() {
        // 清空现有列表
        leaderboardList.innerHTML = '';
        
        // 按分数排序
        leaderboardData.sort((a, b) => b.score - a.score);
        
        // 添加新条目
        leaderboardData.forEach((item, index) => {
            const rank = index + 1;
            const li = document.createElement('li');
            li.className = 'ranking-item';
            li.dataset.id = item.id;
            
            // 添加排名动画类
            if (item.lastRank) {
                if (rank < item.lastRank) {
                    li.classList.add('move-up');
                } else if (rank > item.lastRank) {
                    li.classList.add('move-down');
                }
            }
            
            li.innerHTML = `
                <div class="item-rank ${rank <= 3 ? 'rank-' + rank : ''}">${rank}</div>
                <img class="item-avatar" src="https://picsum.photos/60/60?random=${item.id}" alt="${item.name}">
                <div class="item-details">
                    <div class="item-name">${item.name}</div>
                    <div class="item-artist">${item.artist}</div>
                </div>
                <div class="item-score">${item.score}</div>
                <div class="vote-count">${item.votes}</div>
                <button class="item-vote" onclick="voteSong(${item.id})">投票</button>
            `;
            
            leaderboardList.appendChild(li);
            
            // 更新上一次排名
            item.lastRank = rank;
        });
    }
    
    // 投票函数
    window.voteSong = function(songId) {
        const song = leaderboardData.find(item => item.id === songId);
        if (song) {
            // 增加分数和票数
            song.score += Math.floor(Math.random() * 20) + 10; // 增加10-30分
            song.votes += 1;
            
            // 重新渲染排行榜
            renderLeaderboard();
            
            // 显示投票成功提示
            showVoteSuccess(song.name);
        }
    }
    
    // 显示投票成功提示
    function showVoteSuccess(songName) {
        const notification = document.createElement('div');
        notification.className = 'vote-notification';
        notification.textContent = `已为《${songName}》投票 +1`;
        
        document.body.appendChild(notification);
        
        // 3秒后移除提示
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
    
    // 初始化渲染
    renderLeaderboard();
});