function convert_to_unicode()
{var array_one=new Array("Ã§","Ëœ",".","'m","]m","Fmf","Fm",")","!","@","#","$","%","^","&","*","(","k|m","em","km","Qm","qm","NËœ","Â¡","Â¢","1","2","4",">","?","B","I","Q","ÃŸ","q","â€ž","â€¹","â€¢","â€º","Â§","Â°","Â¶","Â¿","Ã…","Ã‹","ÃŒ","Ã","ÃŽ","Ã","Ã¥","6Â«","7Â«","8Â«","9Â«","Ã˜","|","8Ãž","9Ãž","S","s","V","v","U","u","Â£","3","Âª","R","r","5","H","h","â€°","Â´","~","`","6","7","8","9","0","T","t","Y","y","b","W","w","G","g","K","k","Ë†","A","a","E","e","D","d","o","/","N","n","J","j","Z","z","i",":",";","X","x","cfâ€˜","câ€˜f","cf}","cf]","cf","c","O{","O","pm","p","C","P]","P","fâ€˜","\"","'","+","f","[","\\","]","}","F","L","M","à¥à¤¾","à¥à¥‹","à¥à¥Œ","à¤…à¥‹","à¤…à¤¾","à¤†à¥ˆ","à¤†à¥‡","à¤¾à¥‹","à¤¾à¥…","à¤¾à¥‡","à¤‚à¥","à¥‡à¥‡","à¤…à¥ˆ","à¤¾à¥‡","à¤…à¥‡","à¤‚à¤¾","à¤…à¥…","à¤¾à¥ˆ","à¥ˆà¤¾","à¤‚à¥ƒ","à¤à¤¾","à¤à¥‚","à¥‡à¤¾","à¤‚à¥‡")
var array_two=new Array("à¥","à¤½","à¥¤","m'","m]","mfF","mF","à¥¦","à¥§","à¥¨","à¥©","à¥ª","à¥«","à¥¬","à¥­","à¥®","à¥¯","à¤«à¥à¤°","à¤","à¤«","à¤•à¥à¤¤","à¤•à¥à¤°","à¤²","à¤œà¥à¤žà¥","à¤¦à¥à¤˜","à¤œà¥à¤ž","à¤¦à¥à¤¦","à¤¦à¥à¤§","à¤¶à¥à¤°","à¤°à¥","à¤¦à¥à¤¯","à¤•à¥à¤·à¥","à¤¤à¥à¤¤","à¤¦à¥à¤®","à¤¤à¥à¤°","à¤§à¥à¤°","à¤™à¥à¤˜","à¤¡à¥à¤¡","à¤¦à¥à¤°","à¤Ÿà¥à¤Ÿ","à¤¡à¥à¤¢","à¤ à¥à¤ ","à¤°à¥‚","à¤¹à¥ƒ","à¤™à¥à¤—","à¤¤à¥à¤°","à¤™à¥à¤•","à¤™à¥à¤–","à¤Ÿà¥à¤ ","à¤¦à¥à¤µ","à¤Ÿà¥à¤°","à¤ à¥à¤°","à¤¡à¥à¤°","à¤¢à¥à¤°","à¥à¤¯","à¥à¤°","à¤¡à¤¼","à¤¢à¤¼","à¤•à¥","à¤•","à¤–à¥","à¤–","à¤—à¥","à¤—","à¤˜à¥","à¤˜","à¤™","à¤šà¥","à¤š","à¤›","à¤œà¥","à¤œ","à¤à¥","à¤","à¤žà¥","à¤ž","à¤Ÿ","à¤ ","à¤¡","à¤¢","à¤£à¥","à¤¤à¥","à¤¤","à¤¥à¥","à¤¥","à¤¦","à¤§à¥","à¤§","à¤¨à¥","à¤¨","à¤ªà¥","à¤ª","à¤«à¥","à¤¬à¥","à¤¬","à¤­à¥","à¤­","à¤®à¥","à¤®","à¤¯","à¤°","à¤²à¥","à¤²","à¤µà¥","à¤µ","à¤¶à¥","à¤¶","à¤·à¥","à¤¸à¥","à¤¸","à¤¹à¥","à¤¹","à¤‘","à¤‘","à¤”","à¤“","à¤†","à¤…","à¤ˆ","à¤‡","à¤Š","à¤‰","à¤‹","à¤","à¤","à¥‰","à¥‚","à¥","à¤‚","à¤¾","à¥ƒ","à¥","à¥‡","à¥ˆ","à¤","à¥€","à¤ƒ","","à¥‡","à¥ˆ","à¤“","à¤†","à¤”","à¤“","à¥‹","à¥‰","à¥‹","à¥à¤‚","à¥‡","à¤…â€à¥ˆ","à¥‹","à¤…â€à¥‡","à¤¾à¤‚","à¤…â€à¥…","à¥Œ","à¥Œ","à¥ƒà¤‚","à¤¾à¤","à¥‚à¤","à¥‹","à¥‡à¤‚")
var array_one_length=array_one.length;var modified_substring=document.getElementById("legacy_text").value;Replace_Symbols();processed_text=modified_substring;document.getElementById("unicode_text").value=processed_text;function Replace_Symbols()
{if(modified_substring!="")
{for(input_symbol_idx=0;input_symbol_idx<array_one_length;input_symbol_idx++)
{idx=0;while(idx!=-1)
{modified_substring=modified_substring.replace(array_one[input_symbol_idx],array_two[input_symbol_idx])
idx=modified_substring.indexOf(array_one[input_symbol_idx])}}
var position_of_i=modified_substring.indexOf("l")
while(position_of_i!=-1)
{var charecter_next_to_i=modified_substring.charAt(position_of_i+1)
var charecter_to_be_replaced="l"+charecter_next_to_i
modified_substring=modified_substring.replace(charecter_to_be_replaced,charecter_next_to_i+"à¤¿")
position_of_i=modified_substring.search(/l/,position_of_i+1)}
var position_of_wrong_ee=modified_substring.indexOf("à¤¿à¥")
while(position_of_wrong_ee!=-1)
{var consonent_next_to_wrong_ee=modified_substring.charAt(position_of_wrong_ee+2)
var charecter_to_be_replaced="à¤¿à¥"+consonent_next_to_wrong_ee
modified_substring=modified_substring.replace(charecter_to_be_replaced,"à¥"+consonent_next_to_wrong_ee+"à¤¿")
position_of_wrong_ee=modified_substring.search(/à¤¿à¥/,position_of_wrong_ee+2)}
var position_of_wrong_ee=modified_substring.indexOf("à¤¿à¤‚à¥")
while(position_of_wrong_ee!=-1)
{var consonent_next_to_wrong_ee=modified_substring.charAt(position_of_wrong_ee+3)
var charecter_to_be_replaced="à¤¿à¤‚à¥"+consonent_next_to_wrong_ee
modified_substring=modified_substring.replace(charecter_to_be_replaced,"à¥"+consonent_next_to_wrong_ee+"à¤¿à¤‚")
position_of_wrong_ee=modified_substring.search(/à¤¿à¤‚à¥/,position_of_wrong_ee+3)}
set_of_matras="à¤¾ à¤¿ à¥€ à¥ à¥‚ à¥ƒ à¥‡ à¥ˆ à¥‹ à¥Œ à¤‚ : à¤ à¥…"
var position_of_R=modified_substring.indexOf("{")
while(position_of_R>0)
{probable_position_of_half_r=position_of_R-1;var charecter_at_probable_position_of_half_r=modified_substring.charAt(probable_position_of_half_r)
while(set_of_matras.match(charecter_at_probable_position_of_half_r)!=null)
{probable_position_of_half_r=probable_position_of_half_r-1;charecter_at_probable_position_of_half_r=modified_substring.charAt(probable_position_of_half_r);}
charecter_to_be_replaced=modified_substring.substr(probable_position_of_half_r,(position_of_R-probable_position_of_half_r));new_replacement_string="à¤°à¥"+charecter_to_be_replaced;charecter_to_be_replaced=charecter_to_be_replaced+"{";modified_substring=modified_substring.replace(charecter_to_be_replaced,new_replacement_string);position_of_R=modified_substring.indexOf("{");}
modified_substring=modified_substring.replace(/=/g,".");modified_substring=modified_substring.replace(/_/g,")");modified_substring=modified_substring.replace(/Ã–/g,"=");modified_substring=modified_substring.replace(/Ã™/g,";");modified_substring=modified_substring.replace(/â€¦/g,"â€˜");modified_substring=modified_substring.replace(/Ãš/g,"â€™");modified_substring=modified_substring.replace(/Ã›/g,"!");modified_substring=modified_substring.replace(/Ãœ/g,"%");modified_substring=modified_substring.replace(/Ã¦/g,"â€œ");modified_substring=modified_substring.replace(/Ã†/g,"â€");modified_substring=modified_substring.replace(/Â±/g,"+");modified_substring=modified_substring.replace(/-/g,"(");modified_substring=modified_substring.replace(/</g,"?");}}}
function convert_to_Preeti()
{var array_one=new Array("â€˜","?","à¤•à¤¼","à¤–à¤¼","à¤—à¤¼","à¤œà¤¼","à¤¡à¤¼","à¤¢à¤¼","à¤«à¤¼","à¥","à¤½","à¥¤","m'","m]","mfF","mF","à¥¦","à¥§","à¥¨","à¥©","à¥ª","à¥«","à¥¬","à¥­","à¥®","à¥¯","à¤«à¥à¤°","à¤","à¤«","à¤•à¥à¤¤","à¤•à¥à¤°","à¤²","à¤œà¥à¤žà¥","à¤¦à¥à¤˜","à¤œà¥à¤ž","à¤¦à¥à¤¦","à¤¦à¥à¤§","à¤¶à¥à¤°","à¤°à¥","à¤¦à¥à¤¯","à¤•à¥à¤·à¥","à¤•à¥à¤·","à¤¤à¥à¤¤","à¤¦à¥à¤®","à¤¤à¥à¤°","à¤§à¥à¤°","à¤™à¥à¤˜","à¤¡à¥à¤¡","à¤¦à¥à¤°","à¤Ÿà¥à¤Ÿ","à¤¡à¥à¤¢","à¤ à¥à¤ ","à¤°à¥‚","à¤¹à¥ƒ","à¤™à¥à¤—","à¤¤à¥à¤°","à¤™à¥à¤•","à¤™à¥à¤–","à¤Ÿà¥à¤ ","à¤¦à¥à¤µ","à¤Ÿà¥à¤°","à¤ à¥à¤°","à¤¡à¥à¤°","à¤¢à¥à¤°","à¥à¤°","à¤¡à¤¼","à¤¢à¤¼","à¤•à¥","à¤•","à¤–à¥","à¤–","à¤—à¥","à¤—","à¤˜à¥","à¤˜","à¤™","à¤šà¥","à¤š","à¤›","à¤œà¥","à¤œ","à¤à¥","à¤","à¤žà¥","à¤ž","à¤Ÿ","à¤ ","à¤¡","à¤¢","à¤£à¥","à¤£","à¤¤à¥","à¤¤","à¤¥à¥","à¤¥","à¤¦","à¤§à¥","à¤§","à¤¨à¥","à¤¨","à¤ªà¥","à¤ª","à¤«à¥","à¤¬à¥","à¤¬","à¤­à¥","à¤­","à¤®à¥","à¤®","à¤¯","à¤°","à¤²à¥","à¤²","à¤µà¥","à¤µ","à¤¶à¥","à¤¶","à¤·à¥","à¤·","à¤¸à¥","à¤¸","à¤¹à¥","à¤¹","à¥à¤¯","à¤‘","à¤‘","à¤”","à¤“","à¤†","à¤…","à¤ˆ","à¤‡","à¤Š","à¤‰","à¤‹","à¤","à¤","à¥‰","à¥‚","à¥","à¤‚","à¤¾","à¥ƒ","à¥","à¥‡","à¥ˆ","à¤","à¥€","à¤ƒ","à¥‹","à¥Œ")
var array_two=new Array("â€¦","<","à¤•à¤¼","à¤–à¤¼","à¤—à¤¼","à¤œà¤¼","à¤¡à¤¼","à¤¢à¤¼","à¤«à¤¼","Ã§","Ëœ",".","'m","]m","Fmf","Fm",")","!","@","#","$","%","^","&","*","(","k|m","em","km","Qm","qm","n","Â¡","Â¢","1","2","4",">","?","B","I","If","Q","ÃŸ","q","â€ž","â€¹","â€¢","â€º","Â§","Â°","Â¶","Â¿","Ã…","Ã‹","ÃŒ","Ã","ÃŽ","Ã","Ã¥","6Â«","7Â«","8Â«","9Â«","|","8Ãž","9Ãž","S","s","V","v","U","u","Â£","3","Âª","R","r","5","H","h","â€°","Â´","~","`","6","7","8","9","0","0f","T","t","Y","y","b","W","w","G","g","K","k","Ë†","A","a","E","e","D","d","o","/","N","n","J","j","Z","z","i","if",":",";","X","x","Ã˜","cfâ€˜","câ€˜f","cf}","cf]","cf","c","O{","O","pm","p","C","P]","P","fâ€˜","\"","'","+","f","[","\\","]","}","F","L","M","f]","f}")
var array_one_length=array_one.length;var modified_substring=document.getElementById("unicode_text").value;Replace_Symbols();processed_text=modified_substring;document.getElementById("legacy_text").value=processed_text;function Replace_Symbols()
{if(modified_substring!="")
{var position_of_f=modified_substring.indexOf("à¤¿");while(position_of_f!=-1)
{var character_left_to_f=modified_substring.charAt(position_of_f-1);modified_substring=modified_substring.replace(character_left_to_f+"à¤¿","l"+character_left_to_f);position_of_f=position_of_f-1;while((modified_substring.charAt(position_of_f-1)=="à¥")&(position_of_f!=0))
{var string_to_be_replaced=modified_substring.charAt(position_of_f-2)+"à¥";modified_substring=modified_substring.replace(string_to_be_replaced+"l","l"+string_to_be_replaced);position_of_f=position_of_f-2;}
position_of_f=modified_substring.search(/à¤¿/,position_of_f+1);}
set_of_matras="à¤¾à¤¿à¥€à¥à¥‚à¥ƒà¥‡à¥ˆà¥‹à¥Œà¤‚:à¤à¥…"
modified_substring+='  ';var space=" "
var position_of_half_R=modified_substring.indexOf("à¤°à¥");while(position_of_half_R>0)
{var probable_position_of_Z=position_of_half_R+2;var character_at_probable_position_of_Z=modified_substring.charAt(probable_position_of_Z)
while(set_of_matras.match(character_at_probable_position_of_Z)!=null)
{probable_position_of_Z=probable_position_of_Z+1;character_at_probable_position_of_Z=modified_substring.charAt(probable_position_of_Z);}
var right_to_position_of_Z=probable_position_of_Z+1;if(right_to_position_of_Z>0)
{var character_right_to_position_of_Z=modified_substring.charAt(right_to_position_of_Z)
while("à¥".match(character_right_to_position_of_Z)!=null)
{probable_position_of_Z=right_to_position_of_Z+1;character_at_probable_position_of_Z=modified_substring.charAt(probable_position_of_Z);right_to_position_of_Z=probable_position_of_Z+1;character_right_to_position_of_Z=modified_substring.charAt(right_to_position_of_Z)}}
string_to_be_replaced=modified_substring.substr(position_of_half_R+2,(probable_position_of_Z-position_of_half_R)-1);modified_substring=modified_substring.replace("à¤°à¥"+string_to_be_replaced,string_to_be_replaced+"{");position_of_half_R=modified_substring.indexOf("à¤°à¥");}
modified_substring=modified_substring.substr(0,modified_substring.length-2);for(input_symbol_idx=0;input_symbol_idx<array_one_length;input_symbol_idx++)
{idx=0;while(idx!=-1)
{modified_substring=modified_substring.replace(array_one[input_symbol_idx],array_two[input_symbol_idx])
idx=modified_substring.indexOf(array_one[input_symbol_idx])}}}}}