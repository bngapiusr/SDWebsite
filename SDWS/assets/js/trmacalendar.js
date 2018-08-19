$(document).ready(function() {

    $('#calendar').fullCalendar({
      header: {
        left: 'today',
        center: 'prev,title,next',
        right: 'month,agendaWeek,agendaDay,listWeek'
      },
      defaultDate: '2018-03-12',
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'All Day Event',
          start: '2018-03-01',
        },
        {
          title: 'Long Event',
          start: '2018-03-07',
          end: '2018-03-10'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2018-03-09T16:00:00'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2018-03-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2018-03-11',
          end: '2018-03-13'
        },
        {
          title: 'Meeting',
          start: '2018-03-12T10:30:00',
          end: '2018-03-12T12:30:00'
        },
        {
          title: 'Lunch',
          start: '2018-03-19T12:00:00'
        },
        {
          title: 'Meeting',
          start: '2018-04-01T14:30:00'
        },
        {
          title: 'Happy Hour',
          start: '2018-03-19T17:30:00'
        },
        {
          title: 'Dinner',
          start: '2018-03-28T20:00:00'
        },
        {
          title: 'Birthday Party',
          start: '2018-03-13T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2018-03-28'
        }
      ],
      eventRender: function (event, element, view) {
        // event.start is already a moment.js object
        // we can apply .format()
        var dateString = event.start.format("YYYY-MM-DD");

        $(view.el[0]).find('.ffc-day-number[data-date=' + dateString + ']').css('background-color', '#FAA732');
     }
    });

  });
