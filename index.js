var toolbar = new Ext.Toolbar({
  title: 'Hello Sencha',
  dock: 'top'
});

new Ext.Application({
  launch: function() {
   new Ext.Panel({
     fullscreen: true,
     items: [],
     dockedItems: [toolbar]
   });
  }
});