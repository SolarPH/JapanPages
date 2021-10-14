export default class {
	/**
	 *  @param {HTMLTableElement} root The table element which will display the CSV data.
	 */
	constructor(root) {
		this.root = root;
	}
	
	update(data, headerColumns = []) {
		this.clear();
		this.setHeader(headerColumns);
		this.setBody(data);
	}
	
	setHeader(headerColumns){
		this.root.insertAdjacentHTML("afterbegin", `
			<thead>
				<tr>
					${ headerColumns.map(text => `<th>${text}</th>`).join("") }
				</tr>
			</thead>
		`)
	}
	
	setBody(data) {
		const rowsHtml = data.map(row => {
			return `
				<tr>
					${ row.map(text => `<td>${ text }</td>`).join("") }
				</tr>
			`;
		});
	}
}
