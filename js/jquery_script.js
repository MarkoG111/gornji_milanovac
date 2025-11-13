$(window).on("load", function () {
  $(".hidden").hide(); // Texts in accordion for read more option
});

$("document").ready(function () {
  // Read more button
  $("body").on("click", ".readBtn", function () {
    $(this).parent().find(".hidden:first").slideToggle("slow");

    if ($(this).attr("value") == "Read More") {
      $(this).attr("value", "Minimize");
    } else {
      $(this).attr("value", "Read More");
    }
  });

  // Back to top button
  if ($("#back-to-top").length) {
    let scrollTrigger = 100, // px
      backToTop = function () {
        let scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $("#back-to-top").addClass("show");
        } else {
          $("#back-to-top").removeClass("show");
        }
      };

    backToTop();

    $(window).on("scroll", function () {
      backToTop();
    });

    $("#back-to-top").on("click", function (e) {
      e.preventDefault();
      $("html,body").animate(
        {
          scrollTop: 0,
        },
        700
      );
    });
  }

  // News block
  $("#shTabs").tabs({
    event: "click", // The event that switches the panel
    // Effects
    show: "fadeIn",
    hide: "fadeOut",
    active: 3, // Starting panel
    collapsible: true, // Collapse by clicking the current tab
    heightStyle: "content", // Height based on content (content)
  });

  // Quote block
  $("#customDialog").dialog({
    draggable: true,
    resizable: false,

    height: 320,
    width: 320,
    modal: true, // If set true the user can't do anything until the dialog is closed

    // 1st: left, right, center
    // 2nd: top, center, bottom
    position: {
      my: "center top",
      at: "center bottom",
      of: "#openDialog",
    },

    // Define a delay for showing or hiding it
    show: 1000,
    hide: "1000",
    autoOpen: false,

    // Create buttons for the dialog
    buttons: {
      Ok: function () {
        $("#openDialog").html("Ok 's clicked");
        $(this).dialog("close");
      },
      Cancel: function () {
        $("#openDialog").html("Cancel 's clicked");
        $(this).dialog("close");
      },
    },
  });

  // Displays the dialog box on click
  $("#openDialog")
    .off("click")
    .click(function (e) {
      // off will first remove all existing click listeners, and then connect the new one
      e.preventDefault(); // Won't jump to top of page like links do
      $("#customDialog").dialog("open");
    });

  $("[title]").tooltip(); // Use custom tooltip if the element has a title

  // Accordion
  $(".accordion").accordion({
    animate: 1500, // Slide animation or not or length
    active: 1, // Starting tab
    collapsible: true, // Collapsible if same tab is clicked
    event: "click", // Event that triggers
    heightStyle: "content", // Height based on content (content)
  });

  // Modal
  function modal() {
    let modal = $(".author-modal");
    let fader = $("<div class='background-for-modal'>");
    modal.hide();

    $(".details").click(function () {
      modal.css("visibility", "visible");
      $("body").css("overflow", "hidden");
      $("body").prepend(fader);
      modal.fadeIn(600);
    });

    $("#close").click(function () {
      $("body").find(".background-for-modal").remove();
      $("body").css("overflow", "visible");
      modal.fadeOut(600);
    });

    $(document).click(function (e) {
      if (!$(e.target).closest(".author-modal, .details").length) {
        $("body").css("overflow", "visible");
        $("body").find(".background-for-modal").remove();
        $("body").find(".author-modal").fadeOut(1000);
      }
    });
  }

  modal();

  // Sorting price descending
  $("#sortPriceDesc").click(function (e) {
    e.preventDefault();

    let all = $(".lodging");
    all.sort(function (a, b) {
      a = parseInt($(a).find(".price").text());
      b = parseInt($(b).find(".price").text());

      if (a > b) return -1;
      else if (a < b) return 1;
      else return 0;
    });

    $("#section-lodging").append(all);
  });

  // Sorting price ascending
  $("#sortPriceAsc").click(function (e) {
    e.preventDefault();

    let all = $(".lodging");
    all.sort(function (a, b) {
      a = parseInt($(a).find(".price").text());
      b = parseInt($(b).find(".price").text());

      if (a > b) return 1;
      else if (a < b) return -1;
      else return 0;
    });

    $("#section-lodging").append(all);
  });

  // Sorting name ascending
  $("#sortNameAsc").click(function (e) {
    e.preventDefault();

    let all = $(".lodging");
    all.sort(function (a, b) {
      a = $(a).find(".heading").text();
      b = $(b).find(".heading").text();

      if (a > b) return 1;
      else if (a < b) return -1;
      else return 0;
    });

    $("#section-lodging").append(all);
  });

  // Sorting name descending
  $("#sortNameDesc").click(function (e) {
    e.preventDefault();

    let all = $(".lodging");
    all.sort(function (a, b) {
      a = $(a).find(".heading").text();
      b = $(b).find(".heading").text();

      if (a > b) return -1;
      else if (a < b) return 1;
      else return 0;
    });

    $("#section-lodging").append(all);
  });

  // localStorage
  loadSettings();
  $(window).on("unload", saveSettings);
});

function loadSettings() {
  $("#tbName").val(localStorage.tbName);
  $("#tbEmail").val(localStorage.tbEmail);
  $("#message").val(localStorage.message);

  $('input[value="' + localStorage.gender + '"]').prop("checked", true);
}

function saveSettings() {
  localStorage.tbName = $("#tbName").val();
  localStorage.tbEmail = $("#tbEmail").val();
  localStorage.message = $("#message").val();

  localStorage.gender = $("input[type=radio]:checked").val();
}
