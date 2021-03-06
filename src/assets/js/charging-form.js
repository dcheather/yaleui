// Display fields based on type of Charge ID
$('#charge-id-value').bind('change', function(){
  var chargeID = this.value.toLocaleUpperCase();
  var grantID = new RegExp('^G[RKTB]');
  var giftID = new RegExp('^G[ES]');
  var ydesignatedID = new RegExp('^YD');

  if (grantID.test(chargeID)) {
    $('#additional-required').addClass('hide');
    $('#cost-share').removeClass('hide');
  }

  if (giftID.test(chargeID) || ydesignatedID.test(chargeID)){
    $('#additional-required').removeClass('hide');
    $('#cost-share').addClass('hide');
  }
});


// Move the input focus to the end of the input string
$('#yale-charging-form :input[type=text]').focus(function() {
     setTimeout((function(el) {
        var strLength = el.value.length

        return function() {
            if(el.setSelectionRange !== undefined) {
                el.setSelectionRange(strLength, strLength);
            } else {
                $(el).val(el.value);
            }
    }}(this)), 0);
});

// Convert input to uppercase
$('#yale-charging-form input[type=text]').bind('change', function() {
   this.value = this.value.toLocaleUpperCase();
});

