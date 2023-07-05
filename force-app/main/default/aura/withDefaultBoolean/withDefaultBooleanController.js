({

    createTestObject : function(component, event, helper) {
    
        var createRecordEvent = $A.get('e.force:createRecord');
    
        if (createRecordEvent) {
    
          createRecordEvent.setParams({
    
            'entityApiName': 'Test_Object__c',
    
            'defaultFieldValues': {
              'Health__c' : false,
            }
    
          });
    
          createRecordEvent.fire();
    
        } else {
    
          /* Create Record Event is not supported */
    
          alert("TestObject creation not supported");
    
        }
    
      }
    
    })