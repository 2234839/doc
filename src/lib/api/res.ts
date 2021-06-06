type res = {
	writeHead: (number, unknown) => void;
	end: (string) => void;
};
export const Res = {
	successful(res: res, msg: string, data: unknown) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});
		res.end(JSON.stringify({ code: 1, msg, data }));
	},
	failure(res: res, msg: string, data?: unknown) {
		console.error(msg);
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});
		res.end(JSON.stringify({ code: -1, msg, data }));
	}
};
