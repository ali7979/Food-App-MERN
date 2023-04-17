import React from 'react'

export default function Corousel() {
  return (
    <div className='crsl'>
      	<form>

<input type="radio" name="fancy" autofocus value="clubs" id="clubs" />
<input type="radio" name="fancy" value="hearts" id="hearts" />
<input type="radio" name="fancy" value="spades" id="spades" />
<input type="radio" name="fancy" value="diamonds" id="diamonds" />			
<label for="clubs"></label><label for="hearts"></label><label for="spades"></label><label for="diamonds"></label>

<div class="keys">Use left and right keys to navigate</div>
</form>
    </div>
  )
}
