import {
	createStore
} from 'vuex'
const store = createStore({
	state: { //存放状态
		userName: '',
		// 购物车数据
		shoppingCartList: [],
	},
	getters: {
		login: state => {
			return state.userName ? true : false
		},
		// 是否全选
		isShoppingCheckedAll(state) {
			let flag = true;
			state.shoppingCartList.forEach(item => {
				if (!item.isChecked) {
					flag = false;
				}
			})
			return flag
		},
	},
	mutations: {
		// 增加购物车项
		addShoppingItem({
			shoppingCartList
		}, item) {
			item.isChecked = true;
			shoppingCartList.push(item);
		},
		// 修改购物车内容
		changeShoppingItem({
			shoppingCartList
		}, {
			index,
			count,
			isChecked
		}) {
			if (count !== void 0) {
				shoppingCartList[index].count = count
			}
			if (isChecked !== void 0) {
				shoppingCartList[index].isChecked = isChecked
			}
		},
		// 改变全选状态
		changeShoppingCheckedAll({
			shoppingCartList
		}, isChecked) {
			shoppingCartList.forEach(item => {
				item.isChecked = isChecked
			})
		},
		// 删除购物车单项
		deleteShoppingItem({
			shoppingCartList
		}, index) {
			shoppingCartList.splice(index, 1);
		}
	},
	// 操作异步操作mutation
	actions: {

	},
	modules: {

	},
})

export default store
