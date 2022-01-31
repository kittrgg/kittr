// This comes from mongoose-sanitize

export const sanitize = (v: any): string => {
	if (v instanceof Object) {
		for (var key in v) {
			if (/^\$/.test(key)) {
				delete v[key]
			} else {
				sanitize(v[key])
			}
		}
	}
	return v as string
}
