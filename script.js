// complete the given function

function palindrome(str){
	var s=str.split('').reverse().join('')
	if(str===s)return true
	return false
}
module.exports = palindrome
