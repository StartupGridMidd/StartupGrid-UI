module.exports = Backbone.View.extend({
  
  scrollSampleRate: 10,  // Listen to one in 10 scroll events

  initialize: function(options) {
    this.loading = false;
    this.all_loaded = false;

    this.points = {
      d: $(document),
      w: $(window),
      loadingMessage: this.$('.loading'),
      doneMessage: this.$('.no-more')
    };

    _.bindAll(this, 'loadMore', 'onScroll');
    this.points.d.scroll(this.onScroll);
  },

  onScroll: function() {
  if (!this.all_loaded){
      setTimeout(_.bind(function() {
        if(this.sampleWait == 0) {
          this.sampleWait = this.scrollSampleRate;
          var position = this.points.d.height() - (this.points.w.height() + 800);
          if( !this.loading && window.pageYOffset >= position ) {
            this.loading = true;
            this.loadMore();
          }
        } else {
          this.sampleWait -= 1;
        }
      }, this));
    };
  },

  loadMore: function() {
    this.listings.page++;
    var that = this;
    $('.loading').removeClass('hide');
      
      this.listings.fetch({data: { f: this.feed, q: this.query},
        success: function(data, status) {
          that.loading = false;
          $('.loading').addClass('hide');
          if( data.length == 0 ) {
            that.all_loaded = true;
            $('.no-more').removeClass('hide');
          } 
        },
        error: function() {
          console.log('error loading more listings');
        }
      });
  }
});