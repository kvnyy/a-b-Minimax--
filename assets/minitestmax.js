// 1:max  0:min
const minimax = (player, node) => {
    // 如果不是底层则继续递归所有子元素
    if (!node.value) {
        const map = [];//收集当前层的所有结果
        node.children.forEach(child => {
            map.push(minimax(player ^ 1, child));
        });
        // 根据当前player来确定进行max或者min操作
        node.value = player === 1 ? Math.max(...map) : Math.min(...map);
    }
    // 子元素的结果返回给父元素
    return node.value;
}
function main(tree) {
    const res = minimax(1, tree);
    console.log(res);
    console.log(tree);
}
const tree1 = {
    value: null,
    children: [
        {
            value: null,
            children: [
                {
                    value: 7,
                    children: []
                },
                {
                    value: 3,
                    children: []
                }
            ]
        },
        {
            value: null,
            children: [
                {
                    value: 15,
                    children: []
                }
            ]
        },
        {
            value: null,
            children: [
                {
                    value: 1,
                    children: []
                },
                {
                    value: 12,
                    children: []
                },
                {
                    value: 20,
                    children: []
                },
                {
                    value: 22,
                    children: []
                }
            ]
        },
    ]
}
main(tree1);
