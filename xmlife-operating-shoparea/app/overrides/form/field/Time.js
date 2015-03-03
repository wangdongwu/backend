Ext.define('XMLifeOperating.overrides.form.field.Time', {
	override: 'Ext.form.field.Time',
	// 添加多一种模糊匹配Hi
	altFormats: '"g:ia|g:iA|g:i a|g:i A|h:i|g:i|H:i|ga|ha|gA|h a|g a|g A|gi|hi|gia|hia|g|H|gi a|hi a|giA|hiA|gi A|hi A"|Hi'
});