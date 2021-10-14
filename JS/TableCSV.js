export default class {
	/**
	 *  @param {HTMLTableElement} root The table element which will display the CSV data.
	 */
	constructor(root) {
		this.root = root;
	}
	
	setHeader(headerColumns){
		this.root.insertAdjacentHTML("afterbegin", `
			<thead>
				${ headerColumns.map(text => `<th>${text}</th>`).join("") }
			</thead>
		`)
	}
}
