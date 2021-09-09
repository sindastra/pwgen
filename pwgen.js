/**
 * Copyright (c) 2021, Sindastra
 * All rights reserved.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

function getRandomInt(min = 0, max = 100)
{
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function genPassword(len = 16, usespecial = false, usealphaupp = true, usealphalow = true, usenumeric = true)
{
	let password_chars = [];
	let password = "";

	const alphalow = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	const alphaupp = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	const numeric = ["0","1","2","3","4","5","6","7","8","9"];
	const special = [",",".",":",";","-","_","#","=","+","*","~","!","?","@","/","|","\\","$","%","&","<",">","(",")","{","}","[","]","^","'","`","\""];

	if(usealphalow)
		password_chars = password_chars.concat(alphalow);

	if(usealphaupp)
		password_chars = password_chars.concat(alphaupp);

	if(usenumeric)
		password_chars = password_chars.concat(numeric);

	if(usespecial)
		password_chars = password_chars.concat(special);

	const charslen = password_chars.length;

	for(i=0; i<len; i++)
	{
		password = password + password_chars[getRandomInt(0,charslen)];
	}

	return password;
}
